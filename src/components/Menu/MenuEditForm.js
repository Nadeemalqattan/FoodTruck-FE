import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateMenu } from "../../store/actions/menuActions";

/*-------Styling-------*/
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles,
} from "@material-ui/core";

import Button from "@material-ui/core/Button";

/*-------Components-------*/
import Sidebar from "../Sidebar";

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

const MenuEdit = () => {
  const { categoryId } = useParams();
  const { menuId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const category = useSelector((state) =>
    state.menuReducer.menu.find((category) => category.id === +categoryId)
  );

  const menu = category.FoodItems.find((menu) => menu.id === +menuId);

  const classes = useStyles();
  const [values, setValues] = useState({
    name: menu.name,
    description: menu.description,
    price: menu.price,
    image: menu.image,
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleImage = (event) => {
    setValues({ ...values, image: event.target.files[0] });
  };
  const handleSubmit = () => {
    dispatch(updateMenu(categoryId, menuId, values));
    history.goBack();
  };
  return (
    <div className={classes.root}>
      <Sidebar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <form autoComplete="off" noValidate>
          <Card>
            <CardHeader
              subheader="The information can be edited"
              title="Edit meal"
            />
            <Divider />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item md={4} xs={12}>
                  <TextField
                    fullWidth
                    label="Meal name"
                    name="name"
                    onChange={handleChange}
                    required
                    value={values.name}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <TextField
                    fullWidth
                    label="Price"
                    name="price"
                    onChange={handleChange}
                    required
                    value={values.price}
                    variant="outlined"
                    type="number"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <TextField
                    fullWidth
                    type="file"
                    helperText="Upload Meal Image"
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
                    required
                    value={values.description}
                    variant="outlined"
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      p: 3,
                    }}
                  >
                    <Button
                      color="primary"
                      variant="outlined"
                      href="/menu"
                      onClick={handleSubmit}
                    >
                      Edit
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </form>
      </main>
    </div>
  );
};
export default MenuEdit;
