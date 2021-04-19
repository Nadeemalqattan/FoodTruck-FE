import Routes from "./components/Routes";
import "bootstrap/dist/css/bootstrap.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes />
      <ToastContainer position="bottom-center" autoClose={2000} />
    </>
  );
}

export default App;
