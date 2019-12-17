import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import ExpertiseBlock from "./expertiseBlock";
import Fade from "react-reveal/Fade";
import Block from "../block/block";
import './expertise.scss'
function Expertise() {
    const useStyles = makeStyles({
        card: {
          minWidth: 275,
          margin: "15px 0px 15px 15px",
          boxShadow: "0px 2px 1px -1px rgba(0, 0, 0, 0), 0px 1px 1px 0px rgba(0, 0, 0, 0), 0px 1px 3px 0px rgba(0, 0, 0, 0.1);",
          height:"100%",
          zIndex: 1,
        },
        skills: {
          fontSize: "20px",
          fontFamily: "Alatsi"
        }
      });
      const classes = useStyles();
    return (
        <Block>
        <div className="pt-5 expertise mx-auto" id="expertise">
          <h2 className="subheading">EXPERTISE</h2>
          <Fade left>
            <hr className="subheading-underline"></hr>
          </Fade>
          <div className="skills w-100">
            <div className="row mr-0 ml-0">
            <ExpertiseBlock classes={classes} icon="fas fa-clock" skill={"Time Management"} description={"I can teach you techniques that would help you work smarter and not harder.So you get more done in less time."}></ExpertiseBlock>
            <ExpertiseBlock classes={classes} icon="fas fa-volume-up" skill={"Communication"} description={"I can teach you ways to convey information effecently and techniques that help you understand the information better."}></ExpertiseBlock>
            <ExpertiseBlock classes={classes} icon="fas fa-chalkboard-teacher" skill={"Leadership"} description={"I can help you be a better leader, help you inspire and motivate the people around you."}></ExpertiseBlock>
            <ExpertiseBlock classes={classes} icon="fas fa-brain" skill={"Critical Thinking"} description={"I can improve your ability to think through the problem and devise a plan of action with the best outcome."}></ExpertiseBlock>
            <ExpertiseBlock classes={classes} icon="fas fa-user-tie" skill={"Management"} description={"Being an exectutive director myself, I can teach you techniques that help you manage your business better."}></ExpertiseBlock>
            <ExpertiseBlock classes={classes} icon="fas fa-chart-line" skill={"Business Development"} description={"I will be able to help you create a long-term value for your organization from customers, markets, and relationships."}></ExpertiseBlock>
            <ExpertiseBlock classes={classes} icon="fas fa-user-tag" skill={"Sales Management"} description={"Being a person of sales, I can teach you techniques that will help you drive sales to your business."}></ExpertiseBlock>
            <ExpertiseBlock classes={classes} icon="fas fa-users" skill={"Team Development"} description={"I can guide you to be a better person to work with and suggest you ways to improve the overall charisma of team."}></ExpertiseBlock> 
            </div>
          </div>
        </div>
      </Block>
    )
}

export default Expertise
