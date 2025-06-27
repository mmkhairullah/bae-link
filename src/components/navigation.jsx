import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentHash, setCurrentHash] = useState(location.hash);

  const isHome = location.pathname === "/";

  // Scroll to element after route changes
  useEffect(() => {
    if (location.hash) {
      setCurrentHash(location.hash);
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      setCurrentHash("");
    }
  }, [location]);

  const isActive = (path, hash = "") => {
    const current = window.location.hash.replace("#", "");
    if (path === "/" && location.pathname === "/") {
      if (!hash) return true;
      return current === hash;
    }
    return location.pathname === path && (!hash || current === hash);
  };  

  const scrollLink = (hash, label) => {
    const targetId = hash.replace("#", "");
  
    const handleClick = (e) => {
      e.preventDefault();
  
      if (isHome) {
        // On home page: just scroll and update hash manually
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState(null, "", `/#${targetId}`); // update URL hash without navigation
        setCurrentHash(hash);
      } else {
        // Not on home page: navigate to home without hash, then update hash and scroll
        navigate("/");
        setTimeout(() => {
          window.history.replaceState(null, "", `/#${targetId}`); // update URL hash after navigation
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: "smooth" });
          setCurrentHash(hash);
        }, 400); // wait for home to load
      }
    };
  
    return (
      <a href={`/#${targetId}`} onClick={handleClick} className="page-scroll">
        {label}
      </a>
    );
  };  

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
          <a href="/" className="page-scroll" onClick={(e) => {
            e.preventDefault();
            if (!isHome) navigate("/");
            else window.scrollTo({ top: 0, behavior: "smooth" });
          }}>
            <img
              src="/img/main.jpg"
              alt="The Whole Story"
              className="navbar-logo"
            />
          </a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">

            {/* SPECIAL */}
            {/* <li className={`menu-item ${isActive("/", "poster") ? "active" : ""}`}>
              {scrollLink("#poster", "SPECIAL")}
              <ul className="submenu">
                <li className={isActive("/", "poster") ? "active" : ""}>
                  {scrollLink("#poster", "CLEARANCE")}
                </li>
                <li className={isActive("/", "promotion") ? "active" : ""}>
                  {scrollLink("#promotion", "PROMOTION")}
                </li>
                <li className={isActive("/", "gallery") ? "active" : ""}>
                  {scrollLink("#gallery", "GALLERY")}
                </li>
              </ul>
            </li> */}

            <li className={`menu-item ${isActive("/") ? "active" : ""}`}>
              <a href="/" onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}>SPECIAL</a>
              <ul className="submenu">
                {["poster", "promotion", "gallery"].map((id) => (
                  <li key={id} className={isActive("/#special", id) ? "active" : ""}>
                    <a href={`/#${id}`} onClick={(e) => {
                      e.preventDefault();
                      navigate(`/#${id}`);
                    }}>
                      {id.toUpperCase()}
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            {/* BRANDS */}
            <li className={`menu-item ${isActive("/brands") ? "active" : ""}`}>
              <a href="/brands" onClick={(e) => {
                e.preventDefault();
                navigate("/brands");
              }}>BRANDS</a>
              <ul className="submenu">
                {["portmeirion", "lecreuset", "smeg", "staub"].map((id) => (
                  <li key={id} className={isActive("/brands", id) ? "active" : ""}>
                    <a href={`/brands#${id}`} onClick={(e) => {
                      e.preventDefault();
                      navigate(`/brands#${id}`);
                    }}>
                      {id.toUpperCase()}
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            {/* DISCOVERY */}
            <li className={`menu-item ${isActive("/discovery") ? "active" : ""}`}>
              <a href="/discovery" onClick={(e) => {
                e.preventDefault();
                navigate("/discovery");
              }}>DISCOVERY</a>
              <ul className="submenu">
                {["review", "about"].map((id) => (
                  <li key={id} className={isActive("/discovery", id) ? "active" : ""}>
                    <a href={`/discovery#${id}`} onClick={(e) => {
                      e.preventDefault();
                      navigate(`/discovery#${id}`);
                    }}>
                      {id.toUpperCase()}
                    </a>
                  </li>
                ))}
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};
