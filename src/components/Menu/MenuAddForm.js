import React, { useState } from "react";
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
  const classes = useStyles();
  const [values, setValues] = useState({
    mealName: "",
    description: "",
    category: "",
    price: "",
    image: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
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
                    name="mealName"
                    onChange={handleChange}
                    required
                    value={values.mealName}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    type="file"
                    helperText="Upload Meal Image"
                    name="image"
                    onChange={handleChange}
                    required
                    value={values.image}
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
                  <TextField
                    fullWidth
                    label="Category"
                    name="category"
                    onChange={handleChange}
                    required
                    select
                    SelectProps={{ native: true }}
                    value={values.category}
                    variant="outlined"
                  >
                    {categories.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Price"
                    name="price"
                    onChange={handleChange}
                    required
                    value={values.price}
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
                    <Button color="primary" variant="contained" href="/menu">
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
