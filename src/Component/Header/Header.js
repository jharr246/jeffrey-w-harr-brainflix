import "./Header.scss";
import React, { Component } from "react";
import logo from "../../assets/Logo/Logo-brainflix.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";

import { withRouter, Link } from "react-router-dom";

class Header extends Component {
  logoDirect = (e) => {
    this.props.history.push("/");
    window.location.reload();
  };
  render() {
    return (
      <div className="navbar">
        <div className="navbar__logo-container">
          <img
            onClick={this.logoDirect}
            className="navbar__logo"
            src={logo}
            alt="logo"
          ></img>
        </div>
        <input className="navbar__search" type="text" placeholder={"Search"} />
        <div className="navbar__upload-container">
          <Link className="navbar__upload" to={"/upload"}>
            UPLOAD{" "}
          </Link>
          <img className="navbar__avatar" src={avatar} alt="avatar"></img>
        </div>
      </div>
    );
  }
}
export default withRouter(Header);
