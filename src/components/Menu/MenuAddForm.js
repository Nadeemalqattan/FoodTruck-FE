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
    // description: "",
    // category: "",
    // image: "",
  });

  const handleChange = (event) => {
    setMenu({
      ...menu,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch(addMenu(menu, location.state.categoryID));
    history.push("/menu");
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
              title="Add new meal"
            />
            <Divider />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Meal name"
                    name="name"
                    onChange={handleChange}
                    required
                    value={menu.name}
                    variant="outlined"
                    type="text"
                  />
                </Grid>
                {/* <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    type="file"
                    helperText="Upload Meal Image"
                    name="image"
                    onChange={handleChange}
                    required
                    value={menu.image}
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
                    value={menu.description}
                    variant="outlined"
                    type="text"

                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Category"
                    name="category"
                    onChange={handleChange}
                    required
                    select
                    SelectProps={{ native: true }}
                    value={menu.category}
                    variant="outlined"
                  >
                    {categories.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </Grid> */}
                <Grid item md={6} xs={12}>
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
                      variant="contained"
                      // href="/menu"
                      onClick={handleSubmit}
                    >
                      Add
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
export default MenuAddForm;
