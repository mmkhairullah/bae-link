import { Image } from "./image";
import React from "react";

export const Promotion = (props) => {
  return (
    <div id="promotion" className="text-center">
      <div className="">
        <div className="section-title padding-title">
          <h2>Winter Collections</h2>
          <p>
            
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-md-4 col-md-push-0"
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
      </div>
    </div>
  );
};
