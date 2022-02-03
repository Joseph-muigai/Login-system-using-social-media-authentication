import React from "react";
import "../app.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Login App</span>
      <ul className="list">
        <li className="listItem">
          <img
            src="https://avatars.githubusercontent.com/u/68539624?v=4"
            alt=""
            className="avator"
          />
        </li>
        <li className="listItem">Jowie</li>
        <li className="listItem">Logout</li>
      </ul>
    </div>
  );
};

export default Navbar;
