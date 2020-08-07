import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#d8c4b798",
    maxWidth: 348,
    textAlign: "center",
  },
  media: {
    height: 387,
  },
});

export default function MediaCard({ title, url, details }) {
  const classes = useStyles();

  return (
    <Card style={{marginBottom:"10%"}} className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={url} title="Ice Cream" />
        <CardContent style={{}}>
          <Typography
            style={{ fontFamily: "Sacramento, cursive",fontSize:"210%" }}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {title}
          </Typography>
          <Typography
            
            style={{ fontFamily: "Raleway, sans-serif" ,fontSize:"75%",color:"black"}}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {details}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
