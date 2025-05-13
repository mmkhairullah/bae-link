import React from "react";

const BrandSection = ({ id, title, children }) => (
  <div id={id} className="brand-section">
    {title && <h2 className="brand-title">{title}</h2>}
    {children}
  </div>
);

export default BrandSection;
