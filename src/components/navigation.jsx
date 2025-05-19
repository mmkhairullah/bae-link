import React, { useEffect } from "react";
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

  const isActive = (path) => {
    // Match path or full path + hash
    return location.pathname === path || location.pathname + location.hash === path;
  };

  useEffect(() => {
    // This ensures re-render on hash change
  }, [location.hash]);
  
  

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
            THE WHOLE STORY
          </a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">

            {/* Group 1 */}
            <li className="menu-item">
              {scrollLink("#promotion", "SPECIAL")}
              <ul className="submenu">
                <li>{scrollLink("#promotion", "PROMOTION")}</li>
                <li>{scrollLink("#poster", "CLEARANCE")}</li>
                <li>{scrollLink("#gallery", "GALLERY")}</li>
              </ul>
            </li>

            {/* Group 2 */}
            <li className={`menu-item ${isActive("/brands") || location.pathname.startsWith("/brands") ? "active" : ""}`}>
              <Link to="/brands">BRANDS</Link>
              <ul className={`submenu ${isActive("/brands#portmeirion") || location.pathname.startsWith("/brands#portmeirion") ? "active" : ""}`}>
                <li>
                  <a href="/brands#portmeirion" onClick={(e) => {
                      e.preventDefault();
                      navigate("/brands#portmeirion");
                    }}> PORTMEIRION
                  </a>
                </li>
                <li>
                  <a href="/brands#lecreuset" onClick={(e) => {
                      e.preventDefault();
                      navigate("/brands#lecreuset");
                    }}> LE CREUSET
                  </a>
                </li>
                <li>
                  <a href="/brands#smeg" onClick={(e) => {
                      e.preventDefault();
                      navigate("/brands#smeg");
                    }}> SMEG
                  </a>
                </li>
                <li>
                  <a href="/brands#staub" onClick={(e) => {
                      e.preventDefault();
                      navigate("/brands#staub");
                    }}> STAUB
                  </a>
                </li>
              </ul>
            </li>

            {/* Group 3 */}
            <li className={`menu-item ${isActive("/discovery") || location.pathname.startsWith("/discovery") ? "active" : ""}`}>
              <Link to="/discovery">DISCOVERY</Link>
              <ul className="submenu">
              <li>
                  <a href="/discovery#review" onClick={(e) => {
                      e.preventDefault();
                      navigate("/discovery#review");
                    }}> REVIEW
                  </a>
                </li>
                <li>
                  <a href="/discovery" onClick={(e) => {
                      e.preventDefault();
                      navigate("/discovery#about");
                    }}> ABOUT
                  </a>
                </li>
                {/* <li>{scrollLink("#contact", "REVIEW")}</li> */}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
