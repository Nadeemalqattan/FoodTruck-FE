import React from "react";
/*-------Styling-------*/
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  makeStyles,
} from "@material-ui/core";
import Sidebar from "../Sidebar";
import HeatMap from "../Heatmap";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
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

const Hotspots = () => {
  const classes = useStyles();

  const heatmap = useSelector((state) => state.authReducer.heatmap);
  // heatmap.map((element) => {
  //   console.log(
  //     "LOCATION",
  //     `lat: ${element.location.coordinates[0]}, lng: ${element.location.coordinates[1]}`
  //   );
  // });

  return (
    <div className={classes.root}>
      <Sidebar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <form autoComplete="off" noValidate>
          <Card>
            <CardHeader subheader="" title="Customer Hotspot" />
            <Divider />
            <CardContent>
              <HeatMap />
            </CardContent>
          </Card>
        </form>
      </main>
    </div>
  );
};
export default Hotspots;
