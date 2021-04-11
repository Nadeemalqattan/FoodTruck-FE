import React from "react";

/*-------Styling-------*/
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  makeStyles,
} from "@material-ui/core";

/*-------Components-------*/
import MenuItem from "./MenuItem";
import Sidebar from "../Sidebar";
import datas from "./Data";

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

const Menu = () => {
  const classes = useStyles();

  const menuList = datas.map((menu) => <MenuItem menu={menu} key={menu.id} />);

  return (
    <div className={classes.root}>
      <Sidebar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <form autoComplete="off" noValidate>
          <Card>
            <CardHeader subheader="" title="Menu" />
            <Divider />
            <CardContent>
              {menuList}

              <Grid item md={6} xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    p: 3,
                  }}
                >
                  <Button
                    color="primary"
                    variant="contained"
                    href="/menu/1/add"
                  >
                    Add Menu
                  </Button>
                  <Button color="primary" variant="contained" href="/menu/add">
                    Add Category
                  </Button>
                </Box>
              </Grid>
            </CardContent>
          </Card>
        </form>
      </main>
    </div>
  );
};
export default Menu;
