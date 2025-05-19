import React, { useState } from "react";
import { Image } from "./image";

export const Staub = (props) => { 
  const [selectedImageData, setSelectedImageData] = useState(null);

  const openModal = (imageData) => setSelectedImageData(imageData);
  const closeModal = () => setSelectedImageData(null);

  return (
    <div id="staub" className="text-center">
      <div className="container">
        {/* Header */}
        <div className="section-header-box exclusive-header">
          <div className="exclusive-title-container">
            <h2 className="exclusive-title">STAUB</h2>
            <div className="exclusive-underline"></div>
            <p className="exclusive-subtitle">
              STAUB is synonymous with French craftsmanship, bringing together beauty and functionality in every piece. Their cast-iron cookware is designed to last a lifetime.
            </p>
          </div>
        </div>

        {/* Grid of Images */}
        <div className="brand-grid">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="brand-item-wrapper"
                  onClick={() => openModal(d)}
                >
                  <Image
                    title={d.title}
                    largeImage={d.largeImage}
                    smallImage={d.smallImage}
                  />
                </div>
              ))
            : "Loading..."}
        </div>
      </div>

      {/* Modal */}
      {selectedImageData && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>

            <div className="modal-main-image">
              <img
                src={selectedImageData.largeImage}
                alt={selectedImageData.title}
                className="modal-image"
              />
            </div>

            <div className="modal-gallery">
              {props.data.map((item, index) => (
                <img
                  key={index}
                  src={item.smallImage}
                  alt={item.title}
                  className={`modal-thumb ${
                    item.largeImage === selectedImageData.largeImage ? "active" : ""
                  }`}
                  onClick={() => setSelectedImageData(item)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Staub;