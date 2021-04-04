import "./Header.scss";
import React from "react";
import logo from "../assets/Logo/Logo-brainflix.svg";
import avatar from "../assets/Images/Mohan-muruge.jpg";

export default function Header() {
  return (
    <div className="navbar">
      <div className="navbar__logo-container">
        <img className="navbar__logo" src={logo} alt="logo"></img>
      </div>
      <input
        className="navbar__search"
        type="text"
        placeholder="Search"
      ></input>
      <div className="navbar__upload-container">
        <button className="navbar__upload" type="button">
          + UPLOAD
        </button>
        <img className="navbar__avatar" src={avatar} alt="avatar"></img>
      </div>
    </div>
  );
}
