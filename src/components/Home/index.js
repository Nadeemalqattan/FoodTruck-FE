import React from "react";
//Styling
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Sidebar from "../Sidebar";
import MenuAddForm from "../Menu/MenuAddForm";
import Menu from "../Menu/Menu";
import MenuItem from "../Menu/MenuItem";

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
    <div className={classes.root}>
      <Sidebar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
  );
};

export default Home;
