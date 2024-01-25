import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import logo from "./logo.jpeg";
import './Listinguser.css'; // Import the CSS file

function Listinguser() {

  const logout = () => {
    window.location.href = "/";
  };

  return (
    <div className="listing-container">
      <div className="header">
        <button onClick={logout} className="small-button">Logout</button>
        <h1>Users</h1>
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>SL No</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Country</th>
            <th>Date of Birth</th>
            <th>Status</th>
            <th>Summary of the inquiry question</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Ram</td>
            <td>8838460908</td>
            <td>India</td>
            <td>18-09-1997</td>
            <td>Active</td>
            <td>Test</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Listinguser;
