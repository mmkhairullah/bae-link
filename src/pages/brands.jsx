import React, { useEffect, useState, useRef } from "react";
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
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  const sectionRefs = useRef({
    Portmeirion: null,
    Lecreuset: null,
    Smeg: null,
    Staub: null,
  });

  // Set JSON data and scroll to hash on mount
  useEffect(() => {
    setData(JsonData);

    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      const sectionEl = document.getElementById(sectionId);
      if (sectionEl) {
        setTimeout(() => {
          sectionEl.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  // IntersectionObserver to track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            setActiveSection((prevId) => (prevId !== id ? id : prevId));
          }
        });
      },
      {
        rootMargin: "0px 0px -70% 0px",
        threshold: 0.1,
      }
    );

    Object.entries(sectionRefs.current).forEach(([id, ref]) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div id="brand">
      <Navigation data={data?.Navigation} activeSection={activeSection} />

      {/* Brand Sections */}
      <BrandSection
        id="Portmeirion"
        ref={(el) => (sectionRefs.current.Portmeirion = el)}
      >
        <Portmeirion data={data?.Portmeirion} />
      </BrandSection>

      <BrandSection
        id="Lecreuset"
        ref={(el) => (sectionRefs.current.Lecreuset = el)}
      >
        <Lecreuset data={data?.Lecreuset} />
      </BrandSection>

      <BrandSection
        id="Smeg"
        ref={(el) => (sectionRefs.current.Smeg = el)}
      >
        <Smeg data={data?.Smeg} />
      </BrandSection>

      <BrandSection
        id="Staub"
        ref={(el) => (sectionRefs.current.Staub = el)}
      >
        <Staub data={data?.Staub} />
      </BrandSection>
    </div>
  );
};

export default Brands;
