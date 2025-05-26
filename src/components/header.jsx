import React, { useState, useEffect } from "react";

export const Header = (props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = props.data?.images || [];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const currentImage = images[currentImageIndex];

  return (
    <header id="header" className="header-section">
      <div className="intro-image-wrapper">
        {currentImage && (
          <img
            src={currentImage}
            alt="Banner"
            className="intro-image"
          />
        )}
        <div className="intro-text-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text text-center">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};