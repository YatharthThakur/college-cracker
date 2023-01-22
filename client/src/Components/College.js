import "./CollegeStyles.scss";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { GiProgression } from "react-icons/gi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {useEffect} from 'react';

function College({ name, branch, location, status, date, _id, getList}) {
  const navigate = useNavigate();

  useEffect(()=>{
    navigate("/home");
  },[])

  const onSubmit = async () => {
    try {
      // const response = await axios.delete(`http://localhost:5000/api/college/delete-college?id=${_id}`);
      const response = await axios.delete(`/api/college/delete-college?id=${_id}`);
      getList();
    } catch (error) {}
  };

  const updateCollege = async () => {
    navigate("/update-college?id=" + _id);
  };

  return (
    <div className="college">
      <header>
        <div className="main-icon">{name.charAt(0)}</div>
        <div className="college-name">
          <h5>{name}</h5>
          <p>{branch}</p>
        </div>
      </header>

      <div className="content">
        <div className="content-center">
          <div className="college-info">
            <span className="icon">
              <BsFillCalendarDateFill color="grey" />
            </span>
            <span className="text">{"Date: " + date}</span>
          </div>
          <div className="college-info">
            <span className="icon">
              <CiLocationOn color="grey" />
            </span>
            <span className="text">{"Location: " + location}</span>
          </div>

          <div className="college-info">
            <span className="icon">
              <GiProgression color="grey" />
            </span>
            <span className="status">{"Status: " + status}</span>
          </div>
        </div>

        <footer>
          <div className="actions">
            <button onClick={updateCollege} type="button" className="edit-btn">
              Edit
            </button>
            <button onClick={onSubmit} type="button" className="delete-btn">
              Delete
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default College;