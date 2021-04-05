import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLocation } from "../../store/actions/authActions";

/*-------Styling-------*/
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  makeStyles,
} from "@material-ui/core";
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

const Location = () => {
  const profile = useSelector((state) => state.authReducer.profile);
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
  if (location.loaded) {
    dispatch(
      getLocation(
        location.coordinates.lng,
        location.coordinates.lat,
        profile.id
      )
    );
  }
  return (
    <div className={classes.root}>
      <Sidebar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <form autoComplete="off" noValidate>
          <Card>
            <CardHeader subheader="" title="Location" />
            <Divider />
            <CardContent>
              <p>
                {location.loaded
                  ? "Location cordnations"
                  : "Location data not available yet."}
              </p>
              <>
                <p>
                  Lat:{JSON.stringify(location.coordinates.lat)}
                  <br />
                  lng:{JSON.stringify(location.coordinates.lng)}
                </p>
              </>
            </CardContent>
          </Card>
        </form>
      </main>
    </div>
  );
};
export default Location;
