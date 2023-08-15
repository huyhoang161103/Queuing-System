import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import {
  DatePicker,
  DatePickerProps,
  Input,
  Select,
  Table,
  TableProps,
} from "antd";
import Navbar from "../components/navbar";
import Header from "../components/header";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../features/store";
import { firestore } from "../firebase/config";
import { Device, setDevices, setSelectedDevice } from "../features/deviceSlice";
import { SorterResult } from "antd/es/table/interface";

const Reports: React.FC = () => {
  const dispatch = useDispatch();

  const devices = useSelector((state: RootState) => state.devices.devices);
  const navigate = useNavigate(); // Sử dụng hook useNavigate thay vì useHistory

  const handleButtonAddClick = () => {
    // Thực hiện chuyển hướng đến trang EditDevice
    navigate("/device/add");
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
      title: "Số thứ tự",
      dataIndex: "deviceCode",
      key: "deviceCode",
      className: "no-wrap",
    },

    {
      title: "Tên dịch vụ",
      dataIndex: "deviceName",
      key: "deviceName",
      className: "no-wrap",
      width: 300,
    },
    {
      title: "Thời gian cấp",
      dataIndex: "ipAddress",
      key: "ipAddress",
      className: "no-wrap",
      width: 300,
    },

    {
      title: "Tình trạng",
      dataIndex: "service",
      key: "service",
      width: 300,
    },
    {
      title: "Nguồn cấp",
      dataIndex: "service",
      key: "service",
      width: 300,
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

  type TableData = {
    index: number;
    deviceCode: string;
    deviceName: string;

    service: string;
  };

  // ...

  const onTableChange: TableProps<TableData>["onChange"] = (
    pagination,
    filters,
    sorter: SorterResult<TableData> | SorterResult<TableData>[],
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div className="content">
      <Navbar />
      <div className="content-main">
        <Header />
        <div className="container-main">
          <div className="status-search">
            <div className="status">
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
                  <Icon
                    icon="solar:file-download-bold"
                    className="button-icon"
                  />
                  <p>Tải về</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
