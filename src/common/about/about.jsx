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
                Experienced Executive Director with a demonstrated history of
                working in the public safety industry. Skilled in Business
                Development, Sales Management, Management and Team Management.
                Currently a Soft Skill Enabler. Pursuing a certification course
                from an accredited institution.
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
      </div>
    </Block>
  );
}

export default About;
