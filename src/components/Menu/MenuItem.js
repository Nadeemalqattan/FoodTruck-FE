import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
/*-------Styling-------*/
import Typography from "@material-ui/core/Typography";
import { deleteMenu } from "../../store/actions/menuActions";

const useStyles = makeStyles(() => ({
  root: {
    width: 200,
    margin: 10,
  },
  media: {
    height: 170,
  },
}));

const MenuItem = ({ menu, categoryID }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleDelete = (categoryID, menuId) => {
    dispatch(deleteMenu(categoryID, menuId));
  };
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={menu.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: 5,
            }}
          >
            <Typography gutterBottom variant="h5" component="h2">
              {menu.name}
            </Typography>
            <Typography variant="subtitle1">BD {menu.price}</Typography>
          </div>
          <Typography variant="body2" color="textSecondary" component="p">
            {menu.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ justifyContent: "flex-end" }}>
        <Typography
          variant="body2"
          style={{ cursor: "pointer", color: "red" }}
          onClick={() => handleDelete(categoryID, menu.id)}
        >
          <DeleteIcon />
        </Typography>
        <Link
          color="primary"
          variant="contained"
          to={{
            pathname: `/menu/${categoryID}/edit/${menu.id}`,
          }}
        >
          <EditIcon />
        </Link>
      </CardActions>
    </Card>
  );
};
export default MenuItem;
