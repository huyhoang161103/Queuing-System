import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Input } from "antd";
import firebase from "firebase/compat";
import Navbar from "../components/navbar";
import Header from "../components/header";

const DashBoard: React.FC = () => {
  return (
    <div className="content">
      <Navbar />
      <div className="content-main">
        {" "}
        <Header />
        <img
          className="img-dash"
          src="https://www.pixel4k.com/wp-content/uploads/2020/10/tree-alone-dark-evening-4k_1602501593.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default DashBoard;
