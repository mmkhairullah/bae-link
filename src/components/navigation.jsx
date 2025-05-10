import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            BAE LINK
          </a>{" "}
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            {/* Group 1 */}
            <li className="menu-item">
              <a href="#features" className="page-scroll">
                COLLECTION
              </a>
              <ul className="submenu">
                <li><a href="#portfolio" className="page-scroll">GALLERY</a></li>
                <li><a href="#testimonials" className="page-scroll">TESTIMONIALS</a></li>
              </ul>
            </li>
            {/* Group 2 */}
            <li className="menu-item">
              <a href="#services" className="page-scroll">
                BRANDS
              </a>
              <ul className="submenu">
                <li><a href="#consulting">Consulting</a></li>
                <li><a href="#design">Design</a></li>
              </ul>
            </li>
            {/* Group 3 */}
            <li className="menu-item">
              <a href="#about" className="page-scroll">
                DISCOVER
              </a>
              <ul className="submenu">
                <li><a href="#about" className="page-scroll">ABOUT</a></li>
                <li><a href="#team" className="page-scroll">TEAM</a></li>
                <li><a href="#contact" className="page-scroll">CONTACT</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
