import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function AddEmp() {

  let navigate = useNavigate();

  const [emp, setEmp] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });


  const saveEmp = async (e) => {
    e.preventDefault();
    await axios.post("http://3.95.250.195:8080/api/ems", emp);
    navigate("/");
  };

  const onInputChange = (e) => {
    setEmp({ ...emp, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <form
        onSubmit={(e) => {
          saveEmp(e);
        }}
      >
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type={"text"}
            className="form-control"
            name="firstName"
            value={emp.firstName}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type={"text"}
            className="form-control"
            name="lastName"
            value={emp.lastName}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email ID
          </label>
          <input
            type={"text"}
            className="form-control"
            name="email"
            value={emp.email}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <button type="submit" className="btn btn-primary mx-2">
          Submit
        </button>
        <Link className="btn btn-secondary mx-2" to={"/"}>
          Cancel
        </Link>
      </form>
    </div>
  );
}
