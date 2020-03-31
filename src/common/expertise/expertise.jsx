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
            <ExpertiseBlock classes={classes} icon="fas fa-volume-down" skill={"Communicational skills"} ></ExpertiseBlock>
            <ExpertiseBlock classes={classes} icon="fas fa-people-carry" skill={"Team Management"} ></ExpertiseBlock>
            <ExpertiseBlock classes={classes} icon="fas fa-user-tie" skill={"Body Language"} ></ExpertiseBlock>
            <ExpertiseBlock classes={classes} icon="fas fa-user-check" skill={"Sales and Customer Satisfaction"} ></ExpertiseBlock>
            <ExpertiseBlock classes={classes} icon="fas fa-user-times" skill={"Conflict Management"} ></ExpertiseBlock>
            <ExpertiseBlock classes={classes} icon="fas fa-people-arrows" skill={"Negotiation Skills"} ></ExpertiseBlock>
            <ExpertiseBlock classes={classes} icon="fas fa-graduation-cap" skill={"Leadership Skills"} ></ExpertiseBlock>
            <ExpertiseBlock classes={classes} icon="fas fa-money-bill-alt" skill={"Transactional Analysis"} ></ExpertiseBlock> 
            </div>
          </div>
        </div>
      </Block>
    )
}

export default Expertise
