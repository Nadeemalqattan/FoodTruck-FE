import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMenu } from "../../store/actions/menuActions";
import { useLocation, useHistory } from "react-router-dom";
/*-------Styling-------*/
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles,
} from "@material-ui/core";

/*-------Components-------*/
import Sidebar from "../Sidebar";

const categories = [
  {
    value: "american",
    label: "American",
  },
  {
    value: "arabic",
    label: "Arabic",
  },
  {
    value: "asian",
    label: "Asian",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const MenuAddForm = () => {
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [menu, setMenu] = useState({
    name: "",
    price: 0,
    description: "",
    image: "",
  });

  const handleChange = (event) => {
    setMenu({
      ...menu,
      [event.target.name]: event.target.value,
    });
  };
  const handleImage = (event) => {
    setMenu({ ...menu, image: event.target.files[0] });
  };
  const handleSubmit = () => {
    dispatch(addMenu(menu, location.state.categoryID));
    history.goBack();
  };
  return (
    <div className={classes.root}>
      <Sidebar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <form autoComplete="off" noValidate>
          <Card>
            <CardHeader title="Add new item" />
            <Divider />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item md={4} xs={12}>
                  <TextField
                    fullWidth
                    label="Item Name"
                    name="name"
                    onChange={handleChange}
                    required
                    value={menu.name}
                    variant="outlined"
                    type="text"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <TextField
                    fullWidth
                    label="Price"
                    name="price"
                    onChange={handleChange}
                    required
                    value={menu.price}
                    variant="outlined"
                    type="number"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <TextField
                    fullWidth
                    type="file"
                    helperText="Upload Item Image"
                    name="image"
                    onChange={handleImage}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={12} xs={12}>
                  <TextField
                    fullWidth
                    label="Description"
                    name="description"
                    onChange={handleChange}
                    value={menu.description}
                    variant="outlined"
                    type="text"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid
                  item
                  md={12}
                  xs={12}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Button
                    variant="contained"
                    onClick={handleSubmit}
                    style={{
                      backgroundColor: "#283044",
                      color: "white",
                      marginBottom: "10px",
                    }}
                  >
                    Add
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </form>
      </main>
    </div>
  );
};
export default MenuAddForm;
