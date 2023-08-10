import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Input, Select, Space } from "antd";
import "./pages.css";
import firebase from "firebase/compat";
import Navbar from "../components/navbar";
import Header from "../components/header";
import { Icon } from "@iconify/react";

const EditDevice: React.FC = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const { Option } = Select;

  const handleSelectChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="content">
      <Navbar />
      <div className="content-main">
        <Header />
        <div className="container-main">
          <div className="title">Quản lý thiết bị</div>
          <div className="detail-button">
            <div className="detail-device">
              <div className="detail-device-content">
                <div className="title-detail-device">Thông tin thiết bị</div>
                <div className="row pt-4">
                  <div className="col">
                    <div className="row">
                      <div className="col-3">
                        Mã thiết bị:<span className="red">*</span>
                      </div>
                      <div className="mt-2">
                        <Input></Input>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    {" "}
                    <div className="row">
                      <div className="col-3">
                        Loại thiết bị:<span className="red">*</span>
                      </div>
                      <div className="mt-2">
                        {" "}
                        <Input></Input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row pt-4">
                  <div className="col">
                    <div className="row">
                      <div className="col-3">
                        Tên thiết bị:<span className="red">*</span>
                      </div>
                      <div className="mt-2">
                        <Input></Input>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row">
                      <div className="col-3">
                        Tên đăng nhập:<span className="red">*</span>
                      </div>
                      <div className="mt-2">
                        <Input></Input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row pt-4">
                  <div className="col">
                    <div className="row">
                      <div className="col-3">
                        Địa chỉ IP:<span className="red">*</span>
                      </div>
                      <div className="mt-2">
                        <Input></Input>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row">
                      <div className="col-3">
                        Mật khẩu:<span className="red">*</span>
                      </div>
                      <div className="mt-2">
                        <Input></Input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row pt-4">
                  <div className="col">
                    <div className="row">
                      <div className="">
                        Dịch vụ sử dụng:<span className="red">*</span>
                      </div>
                      <div className="pt-2">
                        <Select
                          size="large"
                          mode="multiple"
                          style={{ width: "100%" }}
                          placeholder="Chọn dịch vụ"
                          onChange={handleSelectChange}
                          optionLabelProp="label"
                        >
                          <Option value="tim" label="Khám tim mạch">
                            <Space>Khám tim mạch</Space>
                          </Option>
                          <Option value="phukhoa" label="Khám sản phụ khoa">
                            <Space>Khám sản phụ khoa</Space>
                          </Option>
                          <Option value="hammat" label="Khám răng hàm mặt">
                            <Space>Khám răng hàm mặt</Space>
                          </Option>
                          <Option value="muihong" label="Khám tai mũi họng">
                            <Space>Khám tai mũi họng</Space>
                          </Option>
                        </Select>
                      </div>
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

export default EditDevice;
