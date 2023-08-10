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

const Services: React.FC = () => {
  const dispatch = useDispatch();

  const devices = useSelector((state: RootState) => state.devices.devices);
  const navigate = useNavigate(); // Sử dụng hook useNavigate thay vì useHistory

  const handleButtonAddClick = () => {
    navigate("/service/add");
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
      title: "Mã dịch vụ",
      dataIndex: "deviceCode",
      key: "deviceCode",
      className: "no-wrap",
      width: 300,
    },

    {
      title: "Tên dịch vụ",
      dataIndex: "deviceName",
      key: "deviceName",
      className: "no-wrap",
      width: 300,
    },
    {
      title: "Mô tả",
      dataIndex: "ipAddress",
      key: "ipAddress",
      className: "no-wrap",
      width: 300,
    },
    {
      title: "Trạng thái hoạt động",
      dataIndex: "isActive",
      className: "no-wrap",
      key: "isActive",
      width: 300,
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
      title: " ",
      dataIndex: "detail",
      key: "detail",
      width: 300,
      render: (text: string, record: Device) => (
        <NavLink className="no-wrap" to={`/service/detail`}>
          Chi tiết
        </NavLink>
      ),
    },

    {
      title: " ",
      dataIndex: "edit",
      key: "edit",
      width: 300,
      render: () => (
        <NavLink className="no-wrap" to={`/service/edit`}>
          Chỉnh sửa
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
          <div className="title">Quản lý dịch vụ</div>
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
                  <p>Thêm dịch vụ</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
