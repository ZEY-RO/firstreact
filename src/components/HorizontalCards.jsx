import React from "react";
import MediaCard from "./card.jsx";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
const HorizontalCards = ({ IceCream }) => {
  const classes = useStyles();
  const CardComp = IceCream.map((user, i) => {
    return (
        <Grid item >
      <MediaCard
        title={IceCream[i].title}
        details={IceCream[i].details}
        url={IceCream[i].url}
      />
      </Grid>
    );
  });
  return (
    <div className={classes.root}>
        <Paper elevation={3}style={{backgroundColor:"#d8c4b798", padding:"3%",margin:"5%",marginTop:"1%"}}>
      <Grid container direction="row" justify="space-evenly" alignItems="center">
        {CardComp}
      </Grid>
      </Paper>
    </div>
  );
};

export default HorizontalCards;
