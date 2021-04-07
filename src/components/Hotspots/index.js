import React,{useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

/*-------Styling-------*/
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  makeStyles,
} from "@material-ui/core";

/*-------Components-------*/
import Sidebar from "../Sidebar";
import HeatMap from "../Heatmap";
import { fetchHeatmap } from "../../store/actions/authActions";

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
  const heatmap = useSelector((state) => state.authReducer.heatmap);
  const heatmapLoading = useSelector(
    (state) => state.authReducer.heatmapLoading
  );
  useEffect(() => {
    dispatch(fetchHeatmap());
  },[])
  const dispatch = useDispatch();

  const classes = useStyles();

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
              {heatmapLoading ? "loading" : <HeatMap heatmap={heatmap} />}
            </CardContent>
          </Card>
        </form>
      </main>
    </div>
  );
};
export default Hotspots;
