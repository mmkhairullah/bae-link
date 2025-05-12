import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { AboutX } from "./pages/aboutX";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Portmeirion } from "./components/portmeirion"; 
import { Lecreuset } from "./components/lecreuset";
import { Smeg } from "./components/smeg";
import { Promotion } from "./components/promotion";
import { Poster } from "./components/poster";
import { Testimonials } from "./components/testimonials";
// import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";

import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    setLandingPageData(JsonData);
    setLoading(false); // Set loading to false once data is fetched
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show a loading message while data is being fetched
  }

  return (

            <div>
              <Header data={landingPageData.Header} />
              <Navigation data={landingPageData.Navigation} />
              <Promotion data={landingPageData.Promotion} />
              <Poster data={landingPageData.Poster} />
              <Gallery data={landingPageData.Gallery} />
              <Portmeirion data={landingPageData.Portmeirion} />
              <Lecreuset data={landingPageData.Lecreuset} />
              <Smeg data={landingPageData.Smeg} />
              <Services data={landingPageData.Services} />
              <Testimonials data={landingPageData.Testimonials} />
              {/* <Team data={landingPageData.Team} /> */}
              <Features data={landingPageData.Features} />
              <Contact data={landingPageData.Contact} />
            </div>

  );
};

export default App;
