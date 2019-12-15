import React from "react";
import Paper from "@material-ui/core/Paper";
import "./endorsements.scss";

function EndorsementsBlock(props) {
    return (
        <Paper className={props.classes.card}>
        <div className="p-5 mx-auto">
          <h2 className="paragraph text-justify font-italic">
            <i className="fas fa-quote-left"></i>{props.comment}
            <i className="fas fa-quote-right"></i>
          </h2>
          <div className="text-left writer">
            <div className="recommender">
              <img
                title=""
                alt=""
                id="ember1541"
                className="recommend-image"
                src={props.image}
              />
              <div className="name">
                {props.name}
                <br />
                <div className="title">
                  {props.title}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Paper> 
    )
}

export default EndorsementsBlock
