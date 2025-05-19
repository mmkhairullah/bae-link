import React, { forwardRef } from "react";

const BrandSection = forwardRef(({ id, title, children }, ref) => (
  <div id={id} ref={ref} className="brand-section">
    {title && <h2 className="brand-title">{title}</h2>}
    {children}
  </div>
));

export default BrandSection;
