import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [emps, setEmp] = useState([]);

  useEffect(() => {
    loadEmp();
  }, []);

  const loadEmp = async () => {
    const result = await axios.get("http://localhost:8080/api/ems/emp");
    console.log(result.data);
    setEmp(result.data);
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
