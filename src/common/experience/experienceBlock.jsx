import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Flip from "react-reveal/Flip";
import "./experienceBlock.scss"

function ExperienceBlock(props) {
  return (
    <div className="col-sm-6 col-12 p-3">
      <Card className={props.classes.card}>
        <a className="company-title" href={props.href} target="_blank" rel="noopener noreferrer">
          <CardContent>
            <Flip left>
              <img
                src={props.src}
                alt={props.alt}
                className={props.classes.company}
              />
            </Flip>
            <div variant="h6" component="h2">
              {props.title}
            </div>
          </CardContent>
        </a>
      </Card>
    </div>
  );
}

export default ExperienceBlock;
