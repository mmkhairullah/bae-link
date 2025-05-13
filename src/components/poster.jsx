import { Image } from "./image";
import React from "react";

export const Poster = (props) => {
  return (
    <div id="poster" className="text-center poster-section">
      <div className="container">
        <div className="section-title padding-title">
          <h2>50% off Botanic Garden Collection</h2>
        </div>
        <div className="row">
          {props.data && props.data.length === 2 ? (
            <>
              {props.data.map((item, index) => (
                <div
                  key={index}
                  className="col-md-6 col-sm-6 col-xs-12 poster-image-wrapper"
                >
                  <div className="poster-card">
                    <Image
                      title={item.title}
                      largeImage={item.largeImage}
                      smallImage={item.smallImage}
                    />
                  </div>
                </div>
              ))}
            </>
          ) : (
            "Loading..."
          )}
        </div>
      </div>
    </div>
  );
};
