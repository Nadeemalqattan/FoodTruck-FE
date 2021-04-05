import React from "react";
/*-------Styling-------*/
import { Box, Typography, makeStyles } from "@material-ui/core";

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
        <Typography
          className={classes.name}
          color="textPrimary"
          variant="h6"
        ></Typography>
      </Box>
    </Box>
  );
};

export default NavProfile;
