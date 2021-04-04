import { Route, Switch } from "react-router";
import Hotspots from "./Hotspots";
import Home from "./Home";
import Menu from "./Menu/Menu";
import MenuAddForm from "./Menu/MenuAddForm";
import MenuEditForm from "./Menu/MenuEditForm";
import Signin from "./Signin";
import UserProfile from "./UserProfile";
import Location from "./Location";
import { useSelector } from "react-redux";

const Routes = () => {
  const user = useSelector((state) => state.authReducer.user);
  console.log("USERR", user);
  return (
    <Switch>
      <Route
        path={"/menu/add"}
        component={() => {
          if (user === null) {
            return <Signin />;
          } else if (user) {
            return <MenuAddForm />;
          }
        }}
      />
      <Route
        path={"/menu/edit"}
        component={() => {
          if (user === null) {
            return <Signin />;
          } else if (user) {
            return <MenuEditForm />;
          }
        }}
      />
      <Route
        path={"/menu"}
        component={() => {
          if (user === null) {
            return <Signin />;
          } else if (user) {
            return <Menu />;
          }
        }}
      />
      <Route
        path={"/location"}
        component={() => {
          if (user === null) {
            return <Signin />;
          } else if (user) {
            return <Location />;
          }
        }}
      />
      <Route
        path={"/hotspot"}
        component={() => {
          if (user === null) {
            return <Signin />;
          } else if (user) {
            return <Hotspots />;
          }
        }}
      />
      <Route
        path={"/profile"}
        component={() => {
          if (user === null) {
            return <Signin />;
          } else if (user) {
            return <UserProfile />;
          }
        }}
      />
      <Route path="/signin">
        <Signin />
      </Route>
      <Route
        path={"/"}
        component={() => {
          if (user === null) {
            return <Signin />;
          } else if (user) {
            return <Home />;
          }
        }}
      />
    </Switch>
  );
};

export default Routes;
