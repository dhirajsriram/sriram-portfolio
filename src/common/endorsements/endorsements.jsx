import React from 'react'
import Block from "../block/block"
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";
import Carousel from  "react-material-ui-carousel";
import Paper from "@material-ui/core/Paper";
import './endorsements.scss'

function Endorsements() {
    const useStyles = makeStyles({
        card: {
          minWidth: 275,
          margin: "15px 0px 15px 15px",
          boxShadow: "none",
          zIndex: 1
        }
      });
      const classes = useStyles();
    return (
        <Block>
        <div className="pt-5 endorsements" id="endorsements">
          <h2 className="subheading">ENDORSEMENTS</h2>
          <Fade left>
            <hr className="subheading-underline"></hr>
          </Fade>
          <div className="endorsements-container">
            <Carousel>
              <Paper className={classes.card}>
                <div className="p-5 w-75 mx-auto">
                  <h2 className="paragraph text-justify font-italic">
                    <i className="fas fa-quote-left"></i>I rarely come across
                    real talents who stand out like Peter. I had the pleasure of
                    working with Peter for three years at the Big Corp,
                    collaborating on several project teams. Peter’s ability to
                    handle multiple projects was unlike any I’ve seen before and
                    made a dramatic increase in the productivity level of our
                    company. No matter how tense a meeting, Peter made sure
                    everyone left with a smile. As a team member or a leader,
                    Peter earns my highest recommendation.
                    <i className="fas fa-quote-right"></i>
                  </h2>
                  <div className="text-left writer">
                    <div className="recommender">
                      <img
                        title=""
                        alt=""
                        id="ember1541"
                        className="recommend-image"
                        src="https://media.licdn.com/dms/image/C5103AQHG0nBctfaNpg/profile-displayphoto-shrink_200_200/0?e=1582156800&amp;v=beta&amp;t=kMbjfYseLa8fUbrA7pkgu9ZP1zWg5vDSMHpNHYokdeI"
                      />
                      <div className="name">
                        Reji Mathew
                        <br />
                        <div className="title">
                          Business Head, South at PV Lumens LLP
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Paper>
              <Paper className={classes.card}>
                <div className="p-5 w-75 mx-auto">
                  <h2 className="paragraph text-justify font-italic">
                    <i className="fas fa-quote-left"></i>I rarely come across
                    real talents who stand out like Peter. I had the pleasure of
                    working with Peter for three years at the Big Corp,
                    collaborating on several project teams. Peter’s ability to
                    handle multiple projects was unlike any I’ve seen before and
                    made a dramatic increase in the productivity level of our
                    company. No matter how tense a meeting, Peter made sure
                    everyone left with a smile. As a team member or a leader,
                    Peter earns my highest recommendation.
                    <i className="fas fa-quote-right"></i>
                  </h2>
                  <div className="text-left writer">
                    <div className="recommender">
                      <img
                        title=""
                        alt=""
                        id="ember1541"
                        className="recommend-image"
                        src="https://media.licdn.com/dms/image/C5103AQHG0nBctfaNpg/profile-displayphoto-shrink_200_200/0?e=1582156800&amp;v=beta&amp;t=kMbjfYseLa8fUbrA7pkgu9ZP1zWg5vDSMHpNHYokdeI"
                      />
                      <div className="name">
                        Reji Mathew
                        <br />
                        <div className="title">
                          Business Head, South at PV Lumens LLP
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Paper>
              <Paper className={classes.card}>
                <div className="p-5 w-75 mx-auto">
                  <h2 className="paragraph text-justify font-italic">
                    <i className="fas fa-quote-left"></i>I rarely come across
                    real talents who stand out like Peter. I had the pleasure of
                    working with Peter for three years at the Big Corp,
                    collaborating on several project teams. Peter’s ability to
                    handle multiple projects was unlike any I’ve seen before and
                    made a dramatic increase in the productivity level of our
                    company. No matter how tense a meeting, Peter made sure
                    everyone left with a smile. As a team member or a leader,
                    Peter earns my highest recommendation.
                    <i className="fas fa-quote-right"></i>
                  </h2>
                  <div className="text-left writer">
                    <div className="recommender">
                      <img
                        title=""
                        alt=""
                        id="ember1541"
                        className="recommend-image"
                        src="https://media.licdn.com/dms/image/C5103AQHG0nBctfaNpg/profile-displayphoto-shrink_200_200/0?e=1582156800&amp;v=beta&amp;t=kMbjfYseLa8fUbrA7pkgu9ZP1zWg5vDSMHpNHYokdeI"
                      />
                      <div className="name">
                        Reji Mathew
                        <br />
                        <div className="title">
                          Business Head, South at PV Lumens LLP
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Paper>
            </Carousel>
          </div>
        </div>
      </Block>
    )
}

export default Endorsements
