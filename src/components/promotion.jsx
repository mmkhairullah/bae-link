import { Image } from "./image";
import React from "react";

export const Promotion = (props) => {
  return (
    <div id="promotion" className="text-center promotion-section">
      <div className="container">
        <div className="section-title padding-title">
          <h2>3 For 2 Spatula</h2>
          <p className="promotion-subtitle">Limited Time Offer – Don't Miss Out!</p>
        </div>

        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-md-4 col-sm-6 col-xs-12">
                  <div className="promotion-card">
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                    <div className="promotion-title">{d.title}</div>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
