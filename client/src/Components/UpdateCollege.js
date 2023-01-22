import React, { useState, useEffect } from 'react'
import NavbarHome from "./NavbarHome.js";
import Sidebar from "./Sidebar.js";
import FormRow from './FormRow';
import "./SettingPageStyles.scss";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  branch: "",
  location: "",
  status: "",
  date: ""
};

export default function UpdateCollege() {
  
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();

  const id = window.location.href.split("=")[1];
  
    useEffect(()=>{
        const fetchData = async () => {
            try {
                // const response = await axios.get(`http://localhost:5000/api/college/colleges-college?id=${id}`);
                const response = await axios.get(`/api/college/colleges-college?id=${id}`);
                setValues(response.data);
              } 
              catch (error) {}
        }
        fetchData();
    },[])

  const onHandleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // call the backend api
  const onSubmit = async (e) => {
    e.preventDefault();

    const college = {};

    values.name && (college.name = values.name);
    values.branch && (college.branch = values.branch);
    values.location && (college.location = values.location);
    values.status && (college.status = values.status);
    values.date && (college.date = values.date);

    // college.createdBy = JSON.parse(localStorage.getItem("user"))._id;

    try {
      // const response = await axios.put(`http://localhost:5000/api/college/update-college?id=${id}`,college);
      const response = await axios.put(`/api/college/update-college?id=${id}`,college);
      navigate("/home");
    } 
    catch (error) {}
  };
  return (
    <div>
      <NavbarHome />
      <div className="homepage-content">
        <Sidebar />
        <div className="settings-page">
          <form className="settings-page-form" onSubmit={onSubmit}>
            <div className="form-center">
              <FormRow
                  handleChange={onHandleChange}
                  value={values.name}
                  name="name"
                  type="string"
                  labelText="College Name"
              />
              <FormRow
                handleChange={onHandleChange}
                value={values.branch}
                name="branch"
                type="string"
                labelText="Branch"
              />
              <FormRow
                handleChange={onHandleChange}
                value={values.location}
                name="location"
                type="string"
                labelText="Location"
              />
              <FormRow
                handleChange={onHandleChange}
                value={values.status}
                name="status"
                type="string"
                labelText="Application Status"
              />
              <FormRow
                handleChange={onHandleChange}
                value={values.date}
                name="date"
                type="string"
                labelText="Date Applied On"
              />

              <button type="submit" className="btn-settings">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
