import React from "react";
import Block from "../block/block";
import Fade from "react-reveal/Fade";
import Carousel from "react-material-ui-carousel";
import "./endorsements.scss";

function Slideshow(props) {
  return (
    <Block>
      <div className="pt-5 endorsements mx-auto" id="endorsements">
        <div className="endorsements-container">
          <Fade>
            <Carousel>
              {props.children}
            </Carousel>
          </Fade>
        </div>
      </div>
    </Block>
  );
}

export default Slideshow;
