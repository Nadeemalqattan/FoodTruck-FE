import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

/*-------Styling-------*/
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  makeStyles,
  Button,
} from "@material-ui/core";

/*-------Components-------*/
import Sidebar from "../Sidebar";
import HeatMap from "../Heatmap";
import { fetchHeatmap, getLocation } from "../../store/actions/authActions";

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
  const profile = useSelector((state) => state.authReducer.profile);
  const heatmapLoading = useSelector(
    (state) => state.authReducer.heatmapLoading
  );
  useEffect(() => {
    dispatch(fetchHeatmap());
  }, []);
  const dispatch = useDispatch();

  const classes = useStyles();
  const useGeoLocation = () => {
    const [location, setLocation] = useState({
      loaded: false,
      coordinates: { lat: "", lng: "" },
    });

    const onSuccess = (location) => {
      setLocation({
        loaded: true,
        coordinates: {
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        },
      });
    };

    const onError = (error) => {
      setLocation({
        loaded: true,
        error: {
          code: error.code,
          message: error.message,
        },
      });
    };

    useEffect(() => {
      if (!("geolocation" in navigator)) {
        onError({
          code: 0,
          message: "Geolocation not supported",
        });
      }

      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, []);

    return location;
  };
  const location = useGeoLocation();
  const handleSubmit = () => {
    dispatch(
      getLocation(
        location.coordinates.lng,
        location.coordinates.lat,
        profile.id
      )
    );
  };
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
              <Button
                style={{
                  backgroundColor: "#283044",
                  color: "white",
                }}
                variant="contained"
                onClick={handleSubmit}
              >
                Update Location
              </Button>
              {heatmapLoading ? (
                "loading"
              ) : (
                <HeatMap heatmap={heatmap} currentLocation={location} />
              )}
            </CardContent>
          </Card>
        </form>
      </main>
    </div>
  );
};
export default Hotspots;
