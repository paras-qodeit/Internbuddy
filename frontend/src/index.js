import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import store from "./store";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Certificate from "./pages/Certificate";
import Payment from "./pages/Payment";
import DashboardPreview from "./components/DashboardPreview";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard-preview" element={<DashboardPreview />} />
      <Route path="/certificate" element={<Certificate />} />
      <Route path="/payment" element={<Payment />} />
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
