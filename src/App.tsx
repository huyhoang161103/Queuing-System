import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Login from "./pages/Login";
import { store, persistor } from "./features/store";
import ForgotPassword from "./pages/ForgotPassword";
import DashBoard from "./pages/DashBoard";
import MenuTest from "./test/MenuTest";
import Device from "./pages/Device";
import { PersistGate } from "redux-persist/integration/react";
import DetailDevice from "./pages/DetailDevice";
import EditDevice from "./pages/EditDevice";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes>
          <Route path="/*" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/device" element={<Device />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/menu" element={<MenuTest />} />
          <Route path="/device/detail" element={<DetailDevice />} />
          <Route path="/device/edit" element={<EditDevice />} />
        </Routes>
      </PersistGate>
    </Provider>
  );
}

export default App;
