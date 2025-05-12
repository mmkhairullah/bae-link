import React from "react";
import { Nav } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Navigation = (props) => { 
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (isHome) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const scrollLink = (href, label) => (
    isHome ? (
      <a href={href} className="page-scroll">{label}</a>
    ) : (
      <Link to={`/#${href.replace("#", "")}`} className="page-scroll">{label}</Link>
    )
  );

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
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
           {/* BAE LINK: force scroll to top if on homepage */}
           <a href="/" className="navbar-brand page-scroll" onClick={handleHomeClick}>
            BAE LINK
          </a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            {/* Group 1 */}
            <li className="menu-item">
              {scrollLink("#features", "COLLECTION")}
              <ul className="submenu">
                <li>{scrollLink("#portfolio", "COLLECTION")}</li>
                <li>{scrollLink("#portfolio", "PROMOTION")}</li>
                <li>{scrollLink("#testimonials", "CLEARANCE")}</li>
              </ul>
            </li>
            {/* Group 2 */}
            <li className="menu-item">
              {scrollLink("#lecreuset", "BRANDS")}
              <ul className="submenu">
                <li>{scrollLink("#lecreuset", "LE CREUSET")}</li>
                <li>{scrollLink("#portmeirion", "PORTMEIRION")}</li>
                <li>{scrollLink("#smeg", "SMEG")}</li>
                <li>{scrollLink("#smeg", "STAUB")}</li>
              </ul>
            </li>
            {/* Group 3 */}
            <li className="menu-item">
              {scrollLink("#discovery", "DISCOVER")}
              <ul className="submenu">
                <li><Link to="/discovery">ABOUT</Link></li>
                <li>{scrollLink("#team", "TEAM")}</li>
                <li>{scrollLink("#contact", "CONTACT")}</li>
                <li>{scrollLink("#contact", "REVIEW")}</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
