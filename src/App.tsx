import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Login from "./pages/Login";
import Home from "./pages/Home";
import store from "./features/store";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/*" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Provider>
  );
}

export default App;
