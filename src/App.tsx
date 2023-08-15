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
import AddDevice from "./pages/AddDevice";
import Services from "./pages/Services";
import EditService from "./pages/EditService";
import AddService from "./pages/AddService";
import DetailService from "./pages/DetailService";
import GiveNumber from "./pages/GiveNumber";
import NewGiveNumber from "./pages/NewGiveNumber";
import DetailGiveNumber from "./pages/DetailGiveNumber";
import Reports from "./pages/Report";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes>
          <Route path="/*" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/menu" element={<MenuTest />} />
          <Route path="/device" element={<Device />} />
          <Route path="/device/detail" element={<DetailDevice />} />
          <Route path="/device/edit" element={<EditDevice />} />
          <Route path="/device/add" element={<AddDevice />} />
          <Route path="/service" element={<Services />} />
          <Route path="/service/detail" element={<DetailService />} />
          <Route path="/service/edit" element={<EditService />} />
          <Route path="/service/add" element={<AddService />} />
          <Route path="/givenumber" element={<GiveNumber />} />
          <Route path="/givenumber/newgivenumber" element={<NewGiveNumber />} />
          <Route
            path="/givenumber/detailgivenumber"
            element={<DetailGiveNumber />}
          />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </PersistGate>
    </Provider>
  );
}

export default App;
