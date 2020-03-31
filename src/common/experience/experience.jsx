import React from 'react';
import Block from '../block/block';
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";
import ExperienceBlock from './experienceBlock';
function Experience() {
    const useStyles = makeStyles({
        card: {
          minWidth: 275,
          margin: "15px 0px 15px 15px",
          boxShadow: "0px 2px 1px -1px rgba(0, 0, 0, 0), 0px 1px 1px 0px rgba(0, 0, 0, 0), 0px 1px 3px 0px rgba(0, 0, 0, 0.1);",
          height:"100%",
          zIndex: 1
        },
        company:{
            height:200,
            width:200,
            objectFit:"contain"
        }
      });
      const classes = useStyles();
    return (
        <Block>
        <div className="pt-5 experience mx-auto" id="experience">
          <h2 className="subheading">EXPERIENCE</h2>
          <Fade left>
            <hr className="subheading-underline"></hr>
          </Fade>
          <div className="row mr-0 ml-0">
            <ExperienceBlock classes={classes} title="Ravel Group of Companies" href={"http://ravelfire.com/"} src={require("../../assets/0.jpeg")} alt={"ravel"}></ExperienceBlock>
            <ExperienceBlock classes={classes} title="Nitin Fire Protection Industries Ltd" href={"http://www.nitinfire.com/"} src={require("../../assets/nitin.jpg")} alt={"nitin"}></ExperienceBlock>
            <ExperienceBlock classes={classes} title="Saffire Devices Pvt Ltd" href={""} src={require("../../assets/saffire.jpeg")} alt={"Saffire"}></ExperienceBlock>
            <ExperienceBlock classes={classes} title="Steelage Industries Ltd., Minimax Division" href={"http://steelage.com/"} src={require("../../assets/steelage.png")} alt={"Steelage"}></ExperienceBlock>
          </div>
        </div>
      </Block>
    )
}

export default Experience
