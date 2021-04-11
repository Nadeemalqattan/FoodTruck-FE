import Routes from "./components/Routes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchFoodTruck } from "./store/actions/authActions";

function App() {

  return (
    <>
      <Routes />
    </>
  );
}

export default App;
