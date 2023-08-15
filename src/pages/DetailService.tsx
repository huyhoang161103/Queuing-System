import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { DatePicker, DatePickerProps, Input, Select, Table } from "antd";
import "./pages.css";
import Navbar from "../components/navbar";
import Header from "../components/header";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../features/store";
import { setSelectedService } from "../features/serviceSlice";

const DetailService: React.FC = () => {
  const columns = [
    {
      title: "Số thứ tự",
      dataIndex: "serviceCode",
      key: "serviceCode",
      className: "no-wrap",
      width: 300,
    },

    {
      title: "Trạng thái",
      dataIndex: "serviceCode",
      key: "serviceCode",
      className: "no-wrap",
      width: 300,
    },
  ];
  const dispatch = useDispatch();

  const selectedService = useSelector(
    (state: RootState) => state.services.selectedService
  );

  const navigate = useNavigate();

  const handleButtonEditClick = () => {
    navigate("/service/edit");
  };

  const handleButtonBackClick = () => {
    navigate("/service");
  };

  useEffect(() => {
    const fetchServiceDetails = async () => {
      if (selectedService) {
        try {
          const response = await fetch(
            `/api/services/${selectedService.serviceCode}`
          );
          const serviceDetails = await response.json();
          dispatch(setSelectedService(serviceDetails));
        } catch (error) {
          console.error("Error:", error);
        }
      }
    };

    fetchServiceDetails();
  }, [dispatch, selectedService]);

  if (!selectedService) {
    return <div>Loading...</div>;
  }
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div className="content">
      <Navbar />
      <div className="content-main">
        <Header />
        <div className="container-main">
          <div className="title">Quản lý dịch vụ </div>
          <div className="detail-button">
            <div className="detail-service-content">
              <div className="detail-service1">
                <div className="detail-device-content">
                  <div className="title-detail-device">Thông tin dịch vụ</div>
                  <div className="row pt-4">
                    <div className="col">
                      <div className="row">
                        <div className="col label-text">Mã dịch vụ:</div>
                        <div className="col">{selectedService.serviceCode}</div>
                      </div>
                    </div>
                  </div>
                  <div className="row pt-4">
                    <div className="col">
                      <div className="row">
                        <div className="col">Tên dịch vụ:</div>
                        <div className="col">{selectedService.serviceName}</div>
                      </div>
                    </div>
                  </div>
                  <div className="row pt-4">
                    {" "}
                    <div className="col">
                      <div className="row">
                        <div className="col">Mô tả:</div>
                        <div className="col">{selectedService.description}</div>
                      </div>
                    </div>
                  </div>
                  <div className="title-detail-device pt-4">Quy tắc cấp số</div>
                  <div className="row pt-4">
                    <div className="col">
                      <div className="row">
                        <div className="col">
                          <div className="row">
                            <div className="col">Tăng tự động:</div>
                            <div className="col flex-input">
                              <Input
                                value={"0001"}
                                style={{ width: 60 }}
                              ></Input>{" "}
                              <span className="den">đến</span>
                              <Input
                                value={"9999"}
                                style={{ width: 60 }}
                              ></Input>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row pt-4">
                    <div className="col">
                      <div className="row">
                        <div className="col">
                          <div className="row">
                            <div className="col">Prefix:</div>
                            <div className="col">
                              <Input
                                value={"0001"}
                                style={{ width: 60 }}
                              ></Input>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row pt-4">
                    <div className="col">
                      <div className="row">
                        <div className="col">
                          <div className="row">
                            <div className="col">Reset mỗi ngày:</div>
                            <div className="pt-2">Ví dụ: 201-2001</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="detail-service2">
                <div className="detail-device-content">
                  <div className="row">
                    <div className="col-3">Trạng thái</div>
                    <div className="col-6">Chọn thời gian</div>
                    <div className="col">Từ khóa</div>
                  </div>
                  <div className="row pt-2">
                    <div className="col-3">
                      <Select
                        size="large"
                        className="select-status"
                        defaultValue="Tất cả"
                        style={{ width: 150 }}
                        onChange={handleChange}
                        options={[
                          { value: "Tất cả", label: "Tất cả" },
                          { value: "Hoạt động", label: "Hoạt động" },
                          {
                            value: "Ngưng hoạt động",
                            label: "Ngưng hoạt động",
                          },
                        ]}
                      />
                    </div>
                    <div className="col">
                      <DatePicker
                        style={{ width: 140 }}
                        onChange={onChange}
                        placeholder="Chọn ngày"
                        size="large"
                      />
                    </div>
                    <div className="col">
                      <DatePicker
                        style={{ width: 140 }}
                        onChange={onChange}
                        placeholder="Chọn ngày"
                        size="large"
                      />
                    </div>
                    <div className="col">
                      {" "}
                      <div className="search-filter">
                        <div className="search-ticket">
                          <Input
                            style={{ height: 40 }}
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
                  <div className="pt-3">
                    {" "}
                    <Table columns={columns} pagination={false} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <button className="button-add" onClick={handleButtonEditClick}>
                <div className="col">
                  <Icon icon="fa6-solid:square-pen" className="button-icon" />
                  <p>Cập nhật danh sách</p>
                </div>
              </button>
              <button className="button-add" onClick={handleButtonBackClick}>
                <Icon icon="system-uicons:wrap-back" className="button-icon" />
                <p>Quay lại</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailService;
