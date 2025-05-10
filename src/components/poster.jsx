import { Image } from "./image";
import React from "react";

export const Poster = (props) => {
  return (
    <div id="poster" className="text-center">
      <div className="">
        <div className="section-title padding-title">
          <h2></h2>
          <p>
          </p>
        </div>
        <div className="row">
            {props.data && props.data.length === 2 ? (
              <div className="row">
                {/* Small image */}
                <div className="small-image col-md-4 col-lg-push-1">
                    <Image
                      title={props.data[1].title}
                      largeImage={props.data[1].largeImage}
                      smallImage={props.data[1].smallImage}
                    />
                </div>

                {/* Big image */}
                <div className="big-image col-md-6 col-lg-push-1">
                    <Image
                      title={props.data[0].title}
                      largeImage={props.data[0].largeImage}
                      smallImage={props.data[0].smallImage}
                    />
                </div>
              </div>
            ) : (
              "Loading..."
            )}
        </div>
      </div>
    </div>
  );
};
