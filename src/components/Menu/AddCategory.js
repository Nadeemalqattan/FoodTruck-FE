import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "../../store/actions/menuActions";
import { useHistory } from "react-router";

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

const AddCategory = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [category, setCategory] = useState({
    name: "",
  });

  const handleChange = (event) => {
    setCategory({
      ...category,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch(addCategory(category));
    history.push("/menu");
  };
  return (
    <div className={classes.root}>
      <Sidebar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <form autoComplete="off" noValidate>
          <Card>
            <CardHeader title="Add new category" />
            <Divider />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Category name"
                    name="name"
                    onChange={handleChange}
                    required
                    value={category.name}
                    variant="outlined"
                    type="text"
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
export default AddCategory;
