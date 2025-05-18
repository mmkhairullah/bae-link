import React, { useState } from "react";
import { Image } from "./image";

export const Poster = (props) => {
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
    <div id="poster" className="text-center poster-section">
      <div className="container">
        <div className="section-title padding-title">
          <h2>50% off Botanic Garden Collection</h2>
        </div>

        <div className="row">
          {props.data && props.data.length === 2 ? (
            props.data.map((item, index) => (
              <div
                key={index}
                className="col-md-6 col-sm-6 col-xs-12 poster-image-wrapper"
              >
                <div className="poster-card" onClick={() => openModal(item.largeImage)}>
                  <Image
                    title={item.title}
                    largeImage={item.largeImage}
                    smallImage={item.smallImage}
                  />
                </div>
              </div>
            ))
          ) : (
            "Loading..."
          )}
        </div>

        {/* Modal */}
        {modalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img src={activeImage} alt="Poster Detail" className="modal-image" />
              <button className="modal-close" onClick={closeModal}>&times;</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
