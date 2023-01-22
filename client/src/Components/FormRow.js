import React from 'react';
// import "../Components/FormRow.scss";
export default function FormRow({ labelText, type = "text", value, handleChange, name }) {
  return (
    <div>
        <label className="form-label">{labelText}</label>
        <input
        type={type}
        value={value}
        required={true}
        name={name}
        onChange={handleChange}
        className="form-input"
        ></input>
    </div>
  )
}
