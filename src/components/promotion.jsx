import React, { useState } from "react";
import { Image } from "./image";

export const Promotion = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const openModal = (image) => {
    setActiveImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveImage(null);
  };

  return (
    <div id="promotion" className="text-center promotion-section">
      <div className="container">
        <div className="section-title padding-title">
          <h2>3 For 2 Spatula</h2>
          <p className="promotion-subtitle">Limited Time Offer – Don't Miss Out!</p>
        </div>

        <div className="row">
          {props.data ? (
            props.data.map((d, i) => (
              <div key={`${d.title}-${i}`} className="col-md-4 col-sm-6 col-xs-12">
                <div className="promotion-card">
                  <div onClick={() => openModal(d.largeImage)} className="promotion-image-wrapper">
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                  <div className="promotion-title">{d.title}</div>
                </div>
              </div>
            ))
          ) : (
            "Loading..."
          )}
        </div>

        {modalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img src={activeImage} alt="Enlarged Promotion" className="modal-image" />
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
