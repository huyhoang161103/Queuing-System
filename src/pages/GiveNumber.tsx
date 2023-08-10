import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { DatePicker, DatePickerProps, Input, Select, Table } from "antd";
import Navbar from "../components/navbar";
import Header from "../components/header";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../features/store";
import { firestore } from "../firebase/config";
import { Device, setDevices, setSelectedDevice } from "../features/deviceSlice";

const GiveNumber: React.FC = () => {
  const dispatch = useDispatch();

  const devices = useSelector((state: RootState) => state.devices.devices);
  const navigate = useNavigate(); // Sử dụng hook useNavigate thay vì useHistory

  const handleButtonAddClick = () => {
    // Thực hiện chuyển hướng đến trang EditDevice
    navigate("/givenumber/newgivenumber");
  };
  const handleDeviceClick = (device: Device) => {
    dispatch(setSelectedDevice(device));
  };
  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const snapshot = await firestore.collection("devices").get();
        const deviceData = snapshot.docs.map((doc) => doc.data() as Device);
        dispatch(setDevices(deviceData));
      } catch (error) {
        console.error("Error fetching devices:", error);
      }
    };

    fetchDevices();
  }, [dispatch]);

  const columns = [
    {
      title: "STT",
      dataIndex: "deviceCode",
      key: "deviceCode",
      className: "no-wrap",
    },

    {
      title: "Tên khách hàng",
      dataIndex: "deviceName",
      key: "deviceName",
      className: "no-wrap",
    },
    {
      title: "Tên dịch vụ",
      dataIndex: "ipAddress",
      key: "ipAddress",
      className: "no-wrap",
    },
    {
      title: "Thời gian cấp",
      dataIndex: "isActive",
      className: "no-wrap",
      key: "isActive",
      render: (isActive: boolean) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: isActive ? "#35C75A" : "#E73F3F",
              marginRight: "5px",
            }}
          ></div>
          {isActive ? "Hoạt động" : "Ngưng hoạt động"}
        </div>
      ),
    },
    {
      title: "Hạn sử dụng",
      dataIndex: "isConnected",
      className: "no-wrap",
      key: "isConnected",
      render: (isConnected: boolean) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: isConnected ? "#35C75A" : "#E73F3F",
              marginRight: "5px",
            }}
          ></div>
          {isConnected ? "Kết nối" : "Mất kết nối"}
        </div>
      ),
    },

    {
      title: "Trạng thái",
      dataIndex: "service",
      key: "service",
      width: 300,
    },
    {
      title: "Nguồn cấp",
      dataIndex: "ipAddress",
      width: 300,
      key: "service",
    },

    {
      title: " ",
      dataIndex: "edit",

      key: "edit",
      render: (text: string, record: Device) => (
        <NavLink
          className="no-wrap"
          to={`/givenumber/detailgivenumber`}
          onClick={() => handleDeviceClick(record)}
        >
          Chi tiết
        </NavLink>
      ),
    },
  ];

  const calculateIndex = (index: number): number => index + 1;

  const dataSource = devices.map((device, index) => ({
    ...device,
    index: calculateIndex(index),
  }));
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
          <div className="title">Quản lý cấp số</div>
          <div className="status-search">
            <div className="status">
              <div className="pe-4">
                <div>Tên dịch vụ</div>
                <Select
                  size="large"
                  className="select-status"
                  defaultValue="Tất cả"
                  style={{ width: 150 }}
                  onChange={handleChange}
                  options={[
                    { value: "Tất cả", label: "Tất cả" },
                    {
                      value: "Khám sản - phụ khoa",
                      label: "Khám sản - phụ khoa",
                    },
                    { value: "Khám răng hàm mặt", label: "Khám răng hàm mặt" },
                    { value: "Khám tai mũi họng", label: "Khám tai mũi họng" },
                  ]}
                />
              </div>
              <div className="pe-4">
                <div>Tình trạng</div>
                <Select
                  size="large"
                  className="select-status"
                  defaultValue="Tất cả"
                  style={{ width: 150 }}
                  onChange={handleChange}
                  options={[
                    { value: "Tất cả", label: "Tất cả" },
                    { value: "Đang chờ", label: "Đang chờ" },
                    { value: "Đã sử dụng", label: "Đã sử dụng" },
                    { value: "Bỏ qua", label: "Bỏ qua" },
                  ]}
                />
              </div>
              <div className="pe-4">
                <div>Nguồn cấp</div>
                <Select
                  size="large"
                  className="select-status"
                  defaultValue="Tất cả"
                  style={{ width: 150 }}
                  onChange={handleChange}
                  options={[
                    { value: "Tất cả", label: "Tất cả" },
                    { value: "Kiosk", label: "Kiosk" },
                    { value: "Hệ thống", label: "Hệ thống" },
                  ]}
                />
              </div>
              <div className="pe-4">
                <div>Chọn thời gian</div>
                <div className="row">
                  <div className="col">
                    {" "}
                    <DatePicker
                      onChange={onChange}
                      placeholder="Chọn ngày"
                      size="large"
                    />
                  </div>
                  <div className="col">
                    {" "}
                    <DatePicker
                      onChange={onChange}
                      placeholder="Chọn ngày"
                      size="large"
                    />
                  </div>
                </div>
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
          <div className="tb-add">
            <div className="tb">
              <Table
                columns={columns}
                dataSource={dataSource}
                pagination={false}
              />
            </div>
            <div>
              <button className="button-add" onClick={handleButtonAddClick}>
                <div className="col">
                  <Icon icon="basil:add-solid" className="button-icon" />
                  <p>Cấp số mới</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiveNumber;
