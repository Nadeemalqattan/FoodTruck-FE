import { Route, Switch } from "react-router";
import Hotspots from "./Hotspots";
import Home from "./Home";
import Menu from "./Menu/Menu";
import MenuAddForm from "./Menu/MenuAddForm";
import MenuEditForm from "./Menu/MenuEditForm";
import Signin from "./Signin";
import UserProfile from "./UserProfile";
import Location from "./Location";

const Routes = () => {
  return (
    <Switch>
      <Route path="/menu/add">
        <MenuAddForm />
      </Route>
      <Route path="/menu/edit">
        <MenuEditForm />
      </Route>
      <Route path="/menu">
        <Menu />
      </Route>
      <Route path="/location">
        <Location />
      </Route>
      <Route path="/hotspot">
        <Hotspots />
      </Route>
      <Route path="/profile">
        <UserProfile />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
