import React from 'react'
import Navbar from '../Components/Navbar';
import FormRow from './FormRow';
import "../Components/RegisterPageStyles.scss"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
// import {Link} from  'react-router-dom';
import axios from 'axios';

const initialState = {
  name: "",
  email: "",
  password: "",
  cnf_password: ""
};

export default function RegisterPage() {
  const [isMember, setIsMember] = useState(false);
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const onHandleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const registerUser = async (currentUser) => {
    try {
      // const response = await axios.post('http://localhost:5000/api/user/register',currentUser);
      const response = await axios.post('/api/user/register',currentUser);
      const { user, token } = response.data;
      addUserToLocalStorage({ user, token });
      if (user) {
        navigate("/home");
      }
    } catch (e) {
      console.log(e);
      setError(e.response.data);
    }
  };

  const loginUser = async (currentUser) => {
    try {
      // const response = await axios.post('http://localhost:5000/api/user/login', currentUser);
      const response = await axios.post('/api/user/login', currentUser);
      const { user, token } = response.data;
      addUserToLocalStorage({ user, token });
      if (user) {
        navigate("/home");
      }
    } catch (e) {
      console.log(e);
      setError(e.response.data);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, cnf_password } = values;
    console.log(name);
    const currentUser = { name, email, password, cnf_password };
    if (isMember) {
      loginUser(currentUser);
    } else {
      registerUser(currentUser);
    }
  };

  const handleMember = () => {
    setIsMember(!isMember)
  }
  return (
    <div>
        <Navbar/>
        <div className='register-container'>
          <form onSubmit={onSubmit}>
            {!isMember && (
              <FormRow
                labelText="Name"
                name="name"
                required={true}
                value={values.name}
                handleChange={onHandleChange}
              />
            )}
            <FormRow
              type="email"
              name="email"
              labelText="Email"
              required={true}
              value={values.email}
              handleChange={onHandleChange}
            />
            <FormRow
              type="password"
              labelText="Password"
              name="password"
              required={true}
              value={values.password}
              handleChange={onHandleChange}
            />
            {!isMember && (
              <FormRow
                type="password"
                name="cnf_password"
                labelText="Confirm Password"
                required={true}
                value={values.cnf_password}
                handleChange={onHandleChange}
              />
            )}
            <button className='btn'>Submit</button>
            {!isMember ? 
            <p>Already have an account? Please <span onClick={handleMember}>Login</span></p>
            :
            <p>Not a member? Please <span onClick={handleMember}>Register</span></p>
            }
            <p>{error}</p>
          </form> 
        </div>
    </div>
  )
}
