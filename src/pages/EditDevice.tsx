import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Input, Select } from "antd";
import "./pages.css";
import firebase from "firebase/compat";
import Navbar from "../components/navbar";
import Header from "../components/header";
import { Icon } from "@iconify/react";

const EditDevice: React.FC = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="content">
      <Navbar />
      <div className="content-main">
        <Header />
        <div className="container-main">
          <div className="title">Quản lý thiết bị</div>
          <div className="status-search">
            <div className="status">
              <div className="pe-4">
                <div>Trạng thái hoạt động</div>
                <Select
                  size="large"
                  className="select-status"
                  defaultValue="Tất cả"
                  style={{ width: 300 }}
                  onChange={handleChange}
                  options={[
                    { value: "Tất cả", label: "Tất cả" },
                    { value: "Hoạt động", label: "Hoạt động" },
                    { value: "Ngưng hoạt động", label: "Ngưng hoạt động" },
                  ]}
                />
              </div>
              <div className="">
                <div>Trạng thái kết nối </div>
                <Select
                  size="large"
                  className="select-status"
                  defaultValue="Tất cả"
                  style={{ width: 300 }}
                  onChange={handleChange}
                  options={[
                    { value: "Tất cả", label: "Tất cả" },
                    { value: "Kết nối", label: "Kết nối" },
                    { value: "Mất kết nối", label: "Mất kết nối" },
                  ]}
                />
              </div>
            </div>
            <div className="search">
              <div className="">Từ khóa</div>
              <div className="search-filter">
                <div className="search-ticket">
                  <Input
                    style={{ width: 300, height: 40 }}
                    type="text"
                    className="form-control"
                    placeholder="Nhập từ khóa"
                  />
                  <Icon
                    icon="iconamoon:search"
                    className="search-ticket-icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditDevice;
