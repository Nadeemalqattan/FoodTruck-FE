import React from "react";
//Styling
import { Avatar, Box, Typography, makeStyles } from "@material-ui/core";
const user = {
  avatar: "/static/images/avatars/avatar_6.png",
  jobTitle: "Senior Developer",
  name: "Food Truck",
};

const useStyles = makeStyles(() => ({
  avatar: {
    // cursor: "pointer",
    width: 32,
    height: 32,
    marginTop: 2,
  },
}));

const NavProfile = () => {
  const classes = useStyles();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          p: 2,
        }}
      >
        <Avatar className={classes.avatar} src={user.avatar} to="/profile" />
        <Typography className={classes.name} color="textPrimary" variant="h6">
          {user.name}
        </Typography>
      </Box>
    </Box>
  );
};

export default NavProfile;
