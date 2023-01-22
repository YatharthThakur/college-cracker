import React, { useEffect, useState } from 'react'
import NavbarHome from "./NavbarHome.js";
import Sidebar from "./Sidebar.js";
import FormRow from './FormRow';
import "./SettingPageStyles.scss";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const initialState = {
  name: "",
  password: ""
};

export default function Settings() {

  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();

  const onHandleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const user = {};

    values.name && (user.name = values.name);
    values.password && (user.password = values.password);
    const id = JSON.parse(localStorage.getItem("user"))._id;

    try {
      // const response = await axios.put(`http://localhost:5000/api/user/update-user?id=${id}`,user);
      const response = await axios.put(`/api/user/update-user?id=${id}`,user);
      navigate("/home");
    } catch (error) {}
  };

  return (
    <div>
      <NavbarHome />
      <div className="homepage-content">
        <Sidebar />
        <div className="settings-page">
        <form className="settings-page-form">
            <div className="form-center">
              <FormRow
                handleChange={onHandleChange}
                value={values.name}
                name="name"
                type="string"
                labelText="Name"
              />
              <FormRow
                handleChange={onHandleChange}
                value={values.password}
                name="password"
                type="password"
                labelText="Password"
              />
              <button type="submit" onClick={onSubmit} className="btn-settings">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
