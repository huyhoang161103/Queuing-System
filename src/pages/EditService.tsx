import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Checkbox, Input, Select, Space } from "antd";
import "./pages.css";
import firebase from "firebase/compat";
import Navbar from "../components/navbar";
import Header from "../components/header";
import { Icon } from "@iconify/react";
import TextArea from "antd/es/input/TextArea";
import { CheckboxChangeEvent } from "antd/es/checkbox";

const EditService: React.FC = () => {
  const { Option } = Select;

  const navigate = useNavigate();
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const handleButtonBackClick = () => {
    // Thực hiện chuyển hướng đến trang EditDevice
    navigate("/service");
  };
  return (
    <div className="content">
      <Navbar />
      <div className="content-main">
        <Header />
        <div className="container-main">
          <div className="title">Quản lý dịch vụ</div>
          <div className="detail-button">
            <div className="detail-service">
              <div className="detail-device-content">
                <div className="title-detail-device">Thông tin dịch vụ</div>
                <div className="row pt-4">
                  <div className="col">
                    <div className="row">
                      {" "}
                      <div className="col-3">
                        Mã dịch vụ:<span className="red">*</span>
                      </div>
                      <div className="mt-2">
                        <Input></Input>
                      </div>
                    </div>
                    <div className="row pt-2">
                      {" "}
                      <div className="col-3">
                        Tên dịch vụ:<span className="red">*</span>
                      </div>
                      <div className="mt-2">
                        <Input></Input>
                      </div>
                    </div>
                    <div className="title-detail-device pt-3">
                      Quy tắc cấp số
                    </div>
                    <div className="row pt-3">
                      <div className="col-4">
                        {" "}
                        <Checkbox onChange={onChange}>Tăng tự động từ</Checkbox>
                      </div>

                      <div className="col flex-input">
                        <Input value={"0001"} style={{ width: 60 }}></Input>{" "}
                        <span className="den">đến</span>
                        <Input value={"9999"} style={{ width: 60 }}></Input>
                      </div>
                    </div>
                    <div className="row pt-3">
                      <div className="col-4">
                        {" "}
                        <Checkbox onChange={onChange}>Prefix:</Checkbox>
                      </div>

                      <div className="col flex-input">
                        <Input value={"0001"} style={{ width: 60 }}></Input>
                      </div>
                    </div>
                    <div className="row pt-3">
                      <div className="col-4">
                        {" "}
                        <Checkbox onChange={onChange}>Surfix:</Checkbox>
                      </div>

                      <div className="col flex-input">
                        <Input value={"0001"} style={{ width: 60 }}></Input>
                      </div>
                    </div>
                    <div className="row pt-3">
                      <div className="col-4">
                        {" "}
                        <Checkbox onChange={onChange}>Reset mỗi ngày:</Checkbox>
                      </div>
                    </div>
                    <div className="row pt-3">
                      <div className="col">
                        <span className="red">* </span>
                        <span className="xam">
                          Là trường thông tin bắt buộc
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="col-3">
                      Mô tả:<span className="red">*</span>
                    </div>
                    <div className="mt-2">
                      <TextArea></TextArea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="button-back-add">
            <button className="back-btn" onClick={handleButtonBackClick}>
              Hủy bỏ
            </button>
            <button className="add-btn">Cập nhật</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditService;