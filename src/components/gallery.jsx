import React, { useState } from "react";
import { Image } from "./image";

export const Gallery = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const openModal = (imageUrl) => {
    setActiveImage(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveImage(null);
  };

  return (
    <div id="gallery" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2 className="exclusive-title">Gallery</h2>
          <p>Enjoying the colors of collections.</p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data ? (
              props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="col-sm-6 col-md-4 col-lg-4"
                >
                  <div onClick={() => openModal(d.largeImage)} style={{ cursor: "pointer" }}>
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                </div>
              ))
            ) : (
              "Loading..."
            )}
          </div>
        </div>

        {/* Modal */}
        {modalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img src={activeImage} alt="Gallery Item" className="modal-image" />
              <button className="modal-close" onClick={closeModal}>
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
