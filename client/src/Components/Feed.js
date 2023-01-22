import "./FeedStyles.scss";
import College from "./College";
import React, {useState, useEffect} from "react";
// import BACKEND_URL from "./constants";
import axios from "axios";

function Feed() {
  const [colleges, setColleges] = useState([])

  const getList = async () =>{
    const response = 
    // await axios.get(`http://localhost:5000/api/college/colleges?createdBy=${JSON.parse(localStorage.getItem("user"))._id}`);
    await axios.get(`/api/college/colleges?createdBy=${JSON.parse(localStorage.getItem("user"))._id}`);
    console.log(response.data);
    setColleges(response.data);
  }
  // call the backend api
  useEffect(()=>{
    getList();
  },[])

  return colleges ? (
    <div className="feeds">
      <div className="colleges">
        {colleges.length == 0 && (
          <p>No Colleges Found. Please add some colleges.</p>
        )}
        {colleges.map((college) => {
          return <College {...college} getList={getList}/>;
        })}
      </div>
    </div>
  ) : (
    <p>Loading</p>
  );
}

export default Feed;