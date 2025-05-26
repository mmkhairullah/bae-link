import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/scrollToTop";

import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { Promotion } from "./components/promotion";
import { Poster } from "./components/poster";
import { Gallery } from "./components/gallery";
import { Contact } from "./components/contact";
import { Discovery } from "./pages/discovery";
import { Brands } from "./pages/brands";
// import { Services } from "./components/services";
// import { Portmeirion } from "./components/portmeirion"; 
// import { Lecreuset } from "./components/lecreuset";
// import { Smeg } from "./components/smeg";
// import { Testimonials } from "./components/testimonials";
// import { Team } from "./components/Team";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const MainPage = ({ data }) => (
  <div>
      <Header data={data.Header} />
      <Navigation data={data.Navigation} />
      <Poster data={data.Poster} />
      <Promotion data={data.Promotion} />
      <Gallery data={data.Gallery} />
      <Features data={data.Features} />
      <Contact data={data.Contact} />
      {/* <Portmeirion data={data.Portmeirion} /> */}
      {/* <Lecreuset data={data.Lecreuset} /> */}
      {/* <Smeg data={data.Smeg} /> */}
      {/* <Services data={data.Services} /> */}
      {/* <Testimonials data={data.Testimonials} /> */}
      {/* <Team data={landingPageData.Team} /> */}
    </div>
);

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLandingPageData(JsonData);
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
     <ScrollToTop />
     <Navigation data={landingPageData.Navigation} />
      <Routes>
        <Route path="/" element={<MainPage data={landingPageData} />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/discovery" element={<Discovery />} />
      </Routes>
    </Router>
  );
};


export default App;
