import React, { useEffect, useState } from "react";
//Styling
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

// var options = {
//   enableHighAccuracy: true,
//   timeout: 500000,
//   maximumAge: 0,
// };

// function success(pos) {
//   var crd = pos.coords;

//   console.log("Your current position is:");
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude: ${crd.longitude}`);
//   console.log(`More or less ${crd.accuracy} meters.`);
// }

// function error(err) {
//   console.warn(`ERROR(${err.code}): ${err.message}`);
// }

// navigator.geolocation.getCurrentPosition(success, error, options);
const Location = () => {
  const classes = useStyles();
  // const [details, setDetails] = useState(null);

  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(displayLocationInfo);
  // }

  // function displayLocationInfo(position) {
  //   const lng = position.coords.longitude;
  //   const lat = position.coords.latitude;

  //   console.log(`longitude: ${lng} | latitude: ${lat}`);
  // }

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
              <div className="row d-flex justify-content-center mt-3 mb-5 pb-5">
                <div className="col-6">
                  <div class="card">
                    <div class="card-header text-left font-weight-bold d-flex">
                      <div className="inline-block mr-auto pt-1">
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </form>
      </main>
    </div>
  );
};
export default Location;
