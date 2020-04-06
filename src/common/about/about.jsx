import React from "react";
import Block from "../block/block";
import { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import "./about.scss";

function About() {
  const [quote, setQuote] = useState("");
  useEffect(() => {
    fetch("https://quotes.rest/qod")
      .then(res => res.json())
      .then(json => setQuote(json.contents.quotes[0]));
  }, [setQuote]);
  return (
    <Block>
      <div className="p-2 pt-5 about mx-auto" id="about">
        <h2 className="subheading">ABOUT</h2>
        <Fade left>
          <hr className="subheading-underline"></hr>
        </Fade>
        <div>
          <div className="mx-auto pt-4 paragraph text-center row about-me">
            <div className="col-12">
              <p>
              My entire career has been dedicated to the <span className="contrast">fire protection </span>
              industry. I am extremely passionate about this subject and remain
              up to date with the knowledge of all latest detection and suppression
              systems available globally. </p>
              <p>
              I am also well known for the deep
              understanding of advanced techniques in firefighting like water
              mist systems and aerosol quenching systems for which I
              represented some of the leading International brands in India.
              </p>
              <p>
              I have served companies like Gunnebo, FirePro, and Nitin fire where
              I handled specialized products like AFT water mist systems from
              Germany and FirePro Aerosol systems from Cyprus. 
              </p>
              <p>
              I last served the
              <span className="contrast"> Ravel Group of Companies </span> as its Executive Director. Prior to this
              I served as Vice President (Sales and Marketing) in Ravel
              Electronics Pvt Ltd for nearly 6 years. 
              </p>
              <p>
              I am now a freelance Soft
              Skills Enabler and is certified by a reputed institute which is
              accredited by <span className="contrast">NABET (National Accreditation Board for Education
              and Training, Govt of India) and SQA (Scottish Qualifications
              Authority, UK) </span></p>
            </div>
            <div className="col-12 mt-5 pt-5">
              <img
                className="profile-image"
                src={require("../../assets/appa.jpg")}
                alt="sriram"
              />
            </div>
          </div>
        </div>
        <blockquote className="blockquote pt-5">
          <p className="mb-0 quote">{quote.quote}</p>
          <div className="blockquote-footer">
            <cite title="Source Title" className="contrast">
              {quote.author}
            </cite>
          </div>
        </blockquote>
        <div>
          <img src={require("../../assets/nabet.jpg")} alt="nabet" width="150"/>
          <img src={require("../../assets/sqa.png")} alt="sqa" width="150"/>
        </div>
      </div>
    </Block>
  );
}

export default About;
