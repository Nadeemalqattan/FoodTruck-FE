import React from "react";

/*-------Styling-------*/
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

const MenuItem = ({ menu }) => {
  const classes = useStyles();

  const handleDelete = () => {
    alert(`Delete Food #${menu.id}`);
  };

  return (
    <div className={classes.root}>
      <div className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt={menu.name} src={menu.image} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h6">
                  {menu.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {menu.description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {menu.category}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body2"
                  style={{ cursor: "pointer" }}
                  onClick={handleDelete}
                >
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">BD {menu.price}</Typography>
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
