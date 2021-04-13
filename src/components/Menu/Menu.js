import React, { useEffect } from "react";
import { Link } from "react-router-dom";
/*-------Styling-------*/
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  makeStyles,
} from "@material-ui/core";

/*-------Components-------*/
import Sidebar from "../Sidebar";
import CategortItem from "./CategoryItem";
import { useSelector, useDispatch } from "react-redux";
import { fetchMenu } from "../../store/actions/menuActions";

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

const Menu = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const category = useSelector((state) => state.menuReducer.menu);
  const isDataLoaded = useSelector((state) => state.menuReducer.isDataLoaded);
  const categoryList = category.map((category) => (
    <CategortItem category={category} key={category.id} />
  ));
  useEffect(() => {
    if (!isDataLoaded) {
      dispatch(fetchMenu());
    }
  }, [dispatch]);
  return (
    <div className={classes.root}>
      <Sidebar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <form autoComplete="off" noValidate>
          <Card>
            <CardHeader subheader="" title="Menu" />
            <Divider />

            <CardContent>
              <Link to="/menu/add" style={{ textDecoration: "none" }}>
                <Button
                  color="primary"
                  variant="contained"
                  style={{ marginBottom: "10px" }}
                >
                  Add Category
                </Button>
              </Link>
              {categoryList}

              <Grid item md={6} xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    p: 3,
                  }}
                ></Box>
              </Grid>
            </CardContent>
          </Card>
        </form>
      </main>
    </div>
  );
};
export default Menu;
