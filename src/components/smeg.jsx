import React, { useState } from "react";
import { Image } from "./image";

export const Smeg = ({ data }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedVariation, setSelectedVariation] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setSelectedVariation(product.variations[0]);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setSelectedVariation(null);
  };

  return (
    <div id="smeg" className="text-center">
      <div className="container">
        <div className="section-header-box exclusive-header">
          <div className="exclusive-title-container">
            <h2 className="exclusive-title">SMEG</h2>
            <div className="exclusive-underline"></div>
            <p className="exclusive-subtitle">
              Infuse your kitchen with style and performance. SMEG’s retro-inspired appliances combine top-notch engineering with an aesthetic that makes a statement.
            </p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="brand-grid">
          {data
            ? data.map((product, i) => (
                <div
                  key={`${product.title}-${i}`}
                  className="brand-item-wrapper"
                  onClick={() => openModal(product)}
                >
                  <Image
                    title={product.title}
                    largeImage={product.variations[0].largeImage}
                    smallImage={product.variations[0].smallImage}
                  />
                </div>
              ))
            : "Loading..."}
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && selectedVariation && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>

            <div className="modal-main-image">
              <img
                src={selectedVariation.largeImage}
                alt={selectedProduct.title}
                className="modal-image"
              />
            </div>

            <div className="modal-gallery">
              {selectedProduct.variations.map((variation, index) => (
                <img
                  key={index}
                  src={variation.smallImage}
                  alt={selectedProduct.title}
                  className={`modal-thumb ${
                    variation.largeImage === selectedVariation.largeImage ? "active" : ""
                  }`}
                  onClick={() => setSelectedVariation(variation)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Smeg;