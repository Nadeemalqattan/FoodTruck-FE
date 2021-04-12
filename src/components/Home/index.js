import React from "react";
import { useDispatch } from "react-redux";
/*-------Styling-------*/
import { makeStyles } from "@material-ui/core/styles";
import { Welcome } from "../styles";

/*-------Components-------*/
import Sidebar from "../Sidebar";
import { fetchFoodTruck } from "../../store/actions/authActions";

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

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Sidebar />
        <main className={classes.content}>
          <div className={classes.toolbar} />
        </main>
      </div>
      <Welcome>Welcome to your truck's portal.</Welcome>
    </>
  );
};

export default Home;
