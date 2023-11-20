import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Employee Management System</a>
        </div>
        <Link className="btn btn-primary mx-2" to="/addemp">AddEmp</Link>
      </nav>
    </div>
  )
}
