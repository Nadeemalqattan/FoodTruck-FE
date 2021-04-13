import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
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
import {
  editWorkingHours,
  fetchWorkingHours,
} from "../../store/actions/workingHoursActions";

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
  const dispatch = useDispatch();
  const classes = useStyles();
  const state = useSelector((state) => state.workingHoursReducer.workingHours);
  const loading = useSelector((state) => state.workingHoursReducer.loading);
  const [stateHours, setState] = useState({
    openTime: null,
    closeTime: null,
  });

  const handleChange = (event) => {
    setState({ ...stateHours, [event.target.name]: event.target.value });
  };
  const handleSubmit = (workingDayId, stateHours) => {
    dispatch(editWorkingHours(workingDayId, stateHours));
    setState({
      openTime: null,
      closeTime: null,
    });
  };

  const formList = state.map((day) => (
    <>
      <Grid
        item
        md={1}
        xs={12}
        style={{
          display: "flex",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <div className="">{day.days}</div>
      </Grid>
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
        <Typography>
          {moment(day.openTime, ["HH.mm.ss"]).format("hh:mm a	")}
        </Typography>
      </Grid>
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
        <Typography>
          {moment(day.closeTime, ["HH.mm.ss"]).format("hh:mm a	")}
        </Typography>
      </Grid>
      <Grid item md={3} xs={12}>
        <TextField
          fullWidth
          label="Opening Hours"
          name="openTime"
          onChange={handleChange}
          required
          variant="outlined"
          type="time"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
          defaultValue={day.openTime}
        />
      </Grid>
      <Grid item md={3} xs={12}>
        <TextField
          fullWidth
          label="Closing Hours"
          name="closeTime"
          onChange={handleChange}
          required
          variant="outlined"
          type="time"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
          defaultValue={day.closeTime}
        />
      </Grid>
      <Grid
        item
        md={1}
        xs={12}
        style={{
          display: "flex",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <Button
          color="primary"
          variant="contained"
          onClick={() => handleSubmit(day.id, stateHours)}
        >
          Edit
        </Button>
      </Grid>
    </>
  ));

  return (
    <div className={classes.root}>
      <Sidebar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <form autoComplete="off" noValidate>
          <Card className="p-1">
            <CardHeader subheader="" title="Food Truck Schedule" />
            <Divider />
            <CardContent>
              <Grid container spacing={3}>
                {loading ? "Loading" : formList}
                <Grid item md={6} xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      p: 3,
                    }}
                  ></Box>
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
