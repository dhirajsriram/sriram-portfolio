import React from 'react'
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Flip from "react-reveal/Flip";

function ExperienceBlock(props) {
    return (
        <div className="col-sm-6 col-12">
              <Card className={props.classes.card}>
                <CardContent>
                  <Typography variant="h6" component="h2"></Typography>
                  <Flip left>
                    <a
                      href={props.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={props.src}
                        alt={props.alt}
                        className={props.classes.company}
                      />
                    </a>
                  </Flip>
                </CardContent>
              </Card>
            </div>
    )
}

export default ExperienceBlock
