import { Outlet } from "react-router";
import "./App.css";
import Navigation from "./components/Navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Navigation />
      <ToastContainer />
      <Outlet />
    </>
  );
}

export default App;
