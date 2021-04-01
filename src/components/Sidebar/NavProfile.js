import React from "react";
//Styling
import { Avatar, Box, Typography, makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";

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
  const profile = useSelector((state) => state.user.profile);

  // const user = {
  //   avatar: "",
  // };

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
        {/* <Avatar className={classes.avatar} src={user.avatar} to="/profile" /> */}
        <Typography className={classes.name} color="textPrimary" variant="h6">
          {/* {profile.name} */}
        </Typography>
      </Box>
    </Box>
  );
};

export default NavProfile;
