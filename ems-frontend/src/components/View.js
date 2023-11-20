import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function View() {

    const [emp,setEmp] = useState({
        firstName:"",
        lastName:"",
        email:""

});

    const {empID} = useParams();

    useEffect(()=>{
        loadEmp();
    },[]);

    const loadEmp = async ()=>{
        const result = await axios.get(`http://localhost:8080/api/ems/${empID}`)
        setEmp(result.data);
    };

    



  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type={"text"}
            className="form-control"
            name="firstName"
            value={emp.firstName}
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
          />
        </div>

        <Link className="btn btn-secondary mx-2" to={"/"}>
          Back
        </Link>
      </form>
    </div>
  );
}
