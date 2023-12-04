import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [emps, setEmp] = useState([]);
  const empID = useParams();

  useEffect(() => {
    loadEmp();
  }, []);

  const loadEmp = async () => {
    const result = await axios.get("http://3.95.250.195:8080/api/ems/emp");
    console.log(result.data);
    setEmp(result.data);
  };

  const deleteEmp = async (empID) => {
    await axios.delete(`http://3.95.250.195:8080/api/ems/${empID}`);
    loadEmp();
  };

  return (
    <div className="container">
      <table className="table border shadow">
        <thead>
          <tr>
            <th scope="col">Sl. No.</th>
            <th scope="col">Emp ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email ID</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {emps.map((emp, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{emp.empID}</td>
              <td>{emp.firstName}</td>
              <td>{emp.lastName}</td>
              <td>{emp.email}</td>
              <td>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewemp/${emp.empID}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-secondary mx-2"
                    to={`/editemp/${emp.empID}`}
                  >
                    Edit
                  </Link>
                  <button
                  type="button"
                    className="btn btn-danger mx-2"
                    onClick={()=>{deleteEmp(emp.empID)}}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
