import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

/*-------Styling-------*/
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Button } from "@material-ui/core";
import { deleteMenu } from "../../store/actions/menuActions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 4,
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

const MenuItem = ({ menu, categoryID }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleDelete = (categoryID, menuId) => {
    dispatch(deleteMenu(categoryID, menuId));
  };

  return (
    <div className={classes.root}>
      <div className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt={menu.name}
                src="https://dummyimage.com/600x400/000/fff"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container spacing={2}>
              <Grid
                item
                xs
                style={{ alignSelf: "center", marginBottom: "20%" }}
              >
                <Typography gutterBottom variant="h6">
                  {menu.name}
                </Typography>
                <Typography variant="subtitle1">BD {menu.price}</Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body2"
                  style={{ cursor: "pointer", color: "red" }}
                  onClick={() => handleDelete(categoryID, menu.id)}
                >
                  Remove
                </Typography>
                <Link
                  color="primary"
                  variant="contained"
                  to={{
                    pathname: `/menu/${categoryID}/edit/${menu.id}`,
                  }}
                >
                  <Button variant="contained" style={{ marginTop: "30%" }}>
                    Edit
                  </Button>
                </Link>
              </Grid>
            </Grid>
            {/* <Grid item>
              <Link
                color="primary"
                variant="contained"
                to={{
                  pathname: `/menu/${categoryID}/edit/${menu.id}`,
                }}
                style={{ textDecoration: "none" }}
              >
                <Button variant="contained" className={classes.edit}>
                  Edit
                </Button>
              </Link>
            </Grid> */}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default MenuItem;
