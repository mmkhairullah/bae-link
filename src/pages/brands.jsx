import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Navigation } from "../components/navigation";
import BrandSection from "../components/brandSection";
import Portmeirion from "../components/portmeirion";
import Lecreuset from "../components/lecreuset";
import Smeg from "../components/smeg";
import Staub from "../components/staub";
import JsonData from "../data/data.json";

import "../App.css";

export const Brands = () => {
  const [data, setData] = useState({});
  const location = useLocation();

  useEffect(() => {
    setData(JsonData); // Load data from the JSON file into state
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      const sectionEl = document.getElementById(sectionId);
      if (sectionEl) {
        // Wait for DOM/render then scroll smoothly
        setTimeout(() => {
          sectionEl.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div id="brand">
      <Navigation data={data?.Navigation} />

      {/* General Brand Info Section
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src="img/about.jpg" className="img-responsive" alt="About" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Brands</h2>
              <p>{data?.paragraph || "loading..."}</p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {data?.Why?.map((d, i) => <li key={`${d}-${i}`}>{d}</li>) || "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {data?.Why2?.map((d, i) => <li key={`${d}-${i}`}>{d}</li>) || "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Individual Brand Sections */}
      <BrandSection title="Portmeirion">
        <Portmeirion data={data?.Portmeirion} />
      </BrandSection>

      <BrandSection id="Lecreuset">
        <Lecreuset data={data?.Lecreuset} />
      </BrandSection>

      <BrandSection id="Smeg">
        <Smeg data={data?.Smeg} />
      </BrandSection>

      <BrandSection id="Staub">
        <Staub data={data?.Staub} />
      </BrandSection>
    </div>
  );
};

export default Brands;
