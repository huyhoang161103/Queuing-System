import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Checkbox, Input, Select, Space } from "antd";
import "./pages.css";
import Navbar from "../components/navbar";
import Header from "../components/header";
import { Icon } from "@iconify/react";
import { firestore } from "../firebase/config";
import { Device, setSelectedDevice } from "../features/deviceSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../features/store";
import TextArea from "antd/es/input/TextArea";
import { CheckboxChangeEvent } from "antd/es/checkbox";

const NewGiveNumber: React.FC = () => {
  const { Option } = Select;
  const navigate = useNavigate();
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const handleButtonBackClick = () => {
    // Thực hiện chuyển hướng đến trang EditDevice
    navigate("/givenumber");
  };
  return (
    <div className="content">
      <Navbar />
      <div className="content-main">
        <Header />
        <div className="container-main">
          <div className="title">Quản lý cấp số</div>
          <div className="detail-button">
            <div className="detail-givenum">
              <div className="detail-device-content">
                <div className="row pt-4">
                  <div className="col themso">
                    <p className="title-num">CẤP SỐ MỚI</p>
                    <p className="sub">Dịch vụ khách hàng lựa chọn</p>
                    <Select
                      size="large"
                      className="select-status"
                      placeholder="Chọn dịch vụ"
                      style={{ width: 400 }}
                      onChange={handleChange}
                      options={[
                        { value: "Khám tim mạch", label: "Khám tim mạch" },
                        {
                          value: "Khám sản - phụ khoa",
                          label: "Khám sản - phụ khoa",
                        },
                        {
                          value: "Khám răng hàm mặt",
                          label: "Khám răng hàm mặt",
                        },
                        {
                          value: "Khám tai mũi họng",
                          label: "Khám tai mũi họng",
                        },
                      ]}
                    />
                    <div className="button-back-add">
                      <button
                        className="back-btn"
                        onClick={handleButtonBackClick}
                      >
                        Hủy bỏ
                      </button>
                      <button className="add-btn">In số</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewGiveNumber;
