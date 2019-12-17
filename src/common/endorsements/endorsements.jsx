import React from "react";
import Block from "../block/block";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";
import Carousel from "react-material-ui-carousel";
import EndorsementsBlock from "./endorsementsBlock"
import "./endorsements.scss";

function Endorsements() {
  const useStyles = makeStyles({
    card: {
      minWidth: 275,
      margin: "15px 0px 15px 15px",
      boxShadow: "0px 2px 1px -1px rgba(0, 0, 0, 0), 0px 1px 1px 0px rgba(0, 0, 0, 0), 0px 1px 3px 0px rgba(0, 0, 0, 0.1);",
      height:"100%",
      zIndex: 1
    }
  });
  const classes = useStyles();
  return (
    <Block>
      <div className="pt-5 endorsements mx-auto" id="endorsements">
        <h2 className="subheading">ENDORSEMENTS</h2>
        <Fade left>
          <hr className="subheading-underline"></hr>
        </Fade>
        <div className="endorsements-container">
          <Fade>
            <Carousel>
              <EndorsementsBlock classes={classes} name={"Reji Mathew"} image={"https://media.licdn.com/dms/image/C5103AQHG0nBctfaNpg/profile-displayphoto-shrink_200_200/0?e=1582156800&v=beta&t=kMbjfYseLa8fUbrA7pkgu9ZP1zWg5vDSMHpNHYokdeI"} title={"Business Head, South at PV Lumens LLP"} comment={"I rarely come across real talents who stand out like Peter. I had the pleasure of working with Peter for three years at the Big Corp, collaborating on several project teams. Peter’s ability to handle multiple projects was unlike any I’ve seen before and made a dramatic increase in the productivity level of our company. No matter how tense a meeting, Peter made sure everyone left with a smile. As a team member or a leader, Peter earns my highest recommendation."}></EndorsementsBlock>
              <EndorsementsBlock classes={classes} name={"Reji Mathew"} image={"https://media.licdn.com/dms/image/C5103AQHG0nBctfaNpg/profile-displayphoto-shrink_200_200/0?e=1582156800&v=beta&t=kMbjfYseLa8fUbrA7pkgu9ZP1zWg5vDSMHpNHYokdeI"} title={"Business Head, South at PV Lumens LLP"} comment={"I rarely come across real talents who stand out like Peter. I had the pleasure of working with Peter for three years at the Big Corp, collaborating on several project teams. Peter’s ability to handle multiple projects was unlike any I’ve seen before and made a dramatic increase in the productivity level of our company. No matter how tense a meeting, Peter made sure everyone left with a smile. As a team member or a leader, Peter earns my highest recommendation."}></EndorsementsBlock>
              <EndorsementsBlock classes={classes} name={"Reji Mathew"} image={"https://media.licdn.com/dms/image/C5103AQHG0nBctfaNpg/profile-displayphoto-shrink_200_200/0?e=1582156800&v=beta&t=kMbjfYseLa8fUbrA7pkgu9ZP1zWg5vDSMHpNHYokdeI"} title={"Business Head, South at PV Lumens LLP"} comment={"I rarely come across real talents who stand out like Peter. I had the pleasure of working with Peter for three years at the Big Corp, collaborating on several project teams. Peter’s ability to handle multiple projects was unlike any I’ve seen before and made a dramatic increase in the productivity level of our company. No matter how tense a meeting, Peter made sure everyone left with a smile. As a team member or a leader, Peter earns my highest recommendation."}></EndorsementsBlock>
              <EndorsementsBlock classes={classes} name={"Reji Mathew"} image={"https://media.licdn.com/dms/image/C5103AQHG0nBctfaNpg/profile-displayphoto-shrink_200_200/0?e=1582156800&v=beta&t=kMbjfYseLa8fUbrA7pkgu9ZP1zWg5vDSMHpNHYokdeI"} title={"Business Head, South at PV Lumens LLP"} comment={"I rarely come across real talents who stand out like Peter. I had the pleasure of working with Peter for three years at the Big Corp, collaborating on several project teams. Peter’s ability to handle multiple projects was unlike any I’ve seen before and made a dramatic increase in the productivity level of our company. No matter how tense a meeting, Peter made sure everyone left with a smile. As a team member or a leader, Peter earns my highest recommendation."}></EndorsementsBlock>
            </Carousel>
          </Fade>
        </div>
      </div>
    </Block>
  );
}

export default Endorsements;
