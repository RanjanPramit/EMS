import React from 'react';


export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Employee Management System</a>
        </div>
        <button className='btn btn-primary mx-5' >Add Employee</button>
      </nav>
    </div>
  )
}
