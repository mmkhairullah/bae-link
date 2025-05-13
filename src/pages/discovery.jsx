import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Navigation } from "../components/navigation";
import { Team } from "../components/team";
import { About } from "../components/about";
import { Testimonials } from "../components/testimonials";
import JsonData from "../data/data.json";

import "../App.css";

const Section = ({ id, title, children }) => (
  <section id={id} className="section-wrapper">
    {title && <h2 className="section-title">{title}</h2>}
    {children}
  </section>
);

export const Discovery = () => {
  const [data, setData] = useState({});
  const location = useLocation();

  // Load JSON data once
  useEffect(() => {
    setData(JsonData);
  }, []);

  // Handle hash scroll after data is loaded and DOM is ready
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1);
      const scrollToSection = () => {
        const sectionEl = document.getElementById(sectionId);
        if (sectionEl) {
          sectionEl.scrollIntoView({ behavior: "smooth" });
        } else {
          // Retry after delay if not ready
          setTimeout(scrollToSection, 100);
        }
      };
      scrollToSection();
    }
  }, [location.hash, data]);

  return (
    <div id="discovery">
      <Navigation data={data?.Navigation} />

      <Section id="testimonials">
        <Testimonials data={data?.Testimonials} />
      </Section>
      
      <Section id="about">
        <About data={data?.About} />
      </Section>

    </div>
  );
};

export default Discovery;
