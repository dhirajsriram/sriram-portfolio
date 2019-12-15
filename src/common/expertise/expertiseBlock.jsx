import React from 'react'
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Flip from "react-reveal/Flip";
function ExpertiseBlock(props) {
    return (
        <div className="col-sm-3 col-12">
                <Card className={props.classes.card}>
                  <CardContent>
                    <Typography variant="h6" component="h2"></Typography>
                    <Flip right>
                      <i className={props.icon}></i>
                    </Flip>
                    <Typography
                      variant="h6"
                      component="h3"
                      className={props.classes.skills}
                    >
                      {props.skill}
                    </Typography>
                    <Typography variant="body2" component="p">
                      {props.description}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
    )
}

export default ExpertiseBlock
