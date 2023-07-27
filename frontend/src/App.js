import { Outlet } from "react-router";
import "./App.css";
import Navigation from "./components/Navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navigation />
      <ToastContainer />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
