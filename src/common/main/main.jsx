import React from "react";
import "./main.scss";
import Block from "../block/block";
import About from "../about/about";
import Expertise from "../expertise/expertise";
import Experience from "../experience/experience";
import Endorsements from "../endorsements/endorsements";

function Main() {
  return (
    <div className="main-content">
      <Block>
        <video autoPlay className="w-100 backdrop" loop>
          <source src={require("../../assets/Black123.mp4")} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div>
          <h1>M.S SRIRAM</h1>
          <h2 className="title">SOFT SKILLS ENABLER</h2>
          <p>Chennai | India</p>
        </div>
      </Block>
      <About></About>
      <Expertise></Expertise>
      <Experience></Experience>
      <Endorsements></Endorsements>
    </div>
  );
}
export default Main;
