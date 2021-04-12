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
  Typography,
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

const Schedule = () => {
  const classes = useStyles();
  const [schedule, setSchedule] = useState([
    {
      days: "Sunday",
      openTime: "",
      closeTime: "",
    },
    {
      days: "Monday",
      openTime: "",
      closeTime: "",
    },
    {
      days: "Tuesday",
      openTime: "",
      closeTime: "",
    },
    {
      days: "Wednesday",
      openTime: "",
      closeTime: "",
    },
    {
      days: "Thursday",
      openTime: "",
      closeTime: "",
    },
    {
      days: "Friday",
      openTime: "",
      closeTime: "",
    },
    {
      days: "Saturday",
      openTime: "",
      closeTime: "10 AM",
    },
  ]);

  const handleChange = (event) => {
    setSchedule({
      ...schedule,
      [event.target.name]: event.target.value,
    });
  };
  console.log(schedule.map((x) => x));

  const formList = schedule.map((day) => (
    <>
      <Grid
        item
        md={2}
        xs={12}
        style={{
          display: "flex",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <div className="h6">{day.days}</div>
      </Grid>
      <Grid item md={5} xs={12}>
        <TextField
          fullWidth
          label="Opening Hours"
          name="startDate"
          onChange={handleChange}
          required
          value={day.openTime}
          variant="outlined"
        />
      </Grid>
      <Grid item md={5} xs={12}>
        <TextField
          fullWidth
          label="Closing Hours"
          name="startDate"
          onChange={handleChange}
          required
          value={day.closeTime}
          variant="outlined"
        />
      </Grid>
    </>
  ));

  return (
    <div className={classes.root}>
      <Sidebar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <form autoComplete="off" noValidate>
          <Card>
            <CardHeader subheader="" title="Food Truck Schedule" />
            <Divider />
            <CardContent>
              <Grid container spacing={3}>
                {formList}
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
export default Schedule;
