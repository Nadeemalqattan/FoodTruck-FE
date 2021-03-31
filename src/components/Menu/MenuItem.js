import React from "react";
//Styling
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    maxWidth: 1000,
  },
  edit: {
    marginTop: 70,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const MenuItem = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src="https://media-cdn.tripadvisor.com/media/photo-s/15/46/f9/e2/beefroot-patty-aztec.jpg"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h6">
                  Food1
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Food Description
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Category
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: "pointer" }}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$19.00</Typography>
              <Button
                variant="contained"
                className={classes.edit}
                href="/menu/edit"
              >
                Edit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default MenuItem;
