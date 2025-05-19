import React, { useState } from "react";

export const Testimonials = (props) => {
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
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2 className="exclusive-title">What our clients say</h2>
        </div>

        <div className="row justify-content-center">
          {props.data ? (
            props.data.map((testimonial, i) => (
              <div key={`${testimonial.name}-${i}`} className="col-md-6 testimonial-wrapper">
                <div className="testimonial">
                  <div className="testimonial-content">
                    <p>{testimonial.text}</p>
                    <div className="testimonial-meta">
                      <strong>{testimonial.name}</strong>
                    </div>

                    {/* Thumbnails */}
                    {testimonial.images && testimonial.images.length > 0 && (
                      <div className="testimonial-thumbnails">
                        {testimonial.images.map((img, idx) => (
                          <img
                            key={idx}
                            src={img.thumbnail}
                            alt={img.description || `Image ${idx + 1}`}
                            onClick={() => openModal(img.original)}
                            className="testimonial-thumb"
                          />
                        ))}
                      </div>
                    )}
                  </div>
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
        <div className="testimonial-modal-overlay" onClick={closeModal}>
          <div className="testimonial-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="testimonial-modal-close" onClick={closeModal}>
              &times;
            </button>
            <img src={activeImage} alt="Enlarged testimonial" className="testimonial-modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};
