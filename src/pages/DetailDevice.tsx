import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Input, Select } from "antd";
import "./pages.css";
import Navbar from "../components/navbar";
import Header from "../components/header";
import { Icon } from "@iconify/react";
import { firestore } from "../firebase/config";
import { Device, setSelectedDevice } from "../features/deviceSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../features/store";

const DetailDevice: React.FC = () => {
  const dispatch = useDispatch();

  const selectedDevice = useSelector(
    (state: RootState) => state.devices.selectedDevice
  );

  useEffect(() => {
    const fetchDeviceDetails = async () => {
      if (selectedDevice) {
        try {
          // Replace this with your actual API endpoint to fetch device details
          const response = await fetch(
            `/api/devices/${selectedDevice.deviceCode}`
          );
          const deviceDetails = await response.json();
          dispatch(setSelectedDevice(deviceDetails));
        } catch (error) {
          console.error("Error fetching device details:", error);
        }
      }
    };

    fetchDeviceDetails();
  }, [dispatch, selectedDevice]);

  if (!selectedDevice) {
    return <div>Loading...</div>;
  }

  return (
    <div className="content">
      <Navbar />
      <div className="content-main">
        <Header />
        <div className="container-main">
          <div className="title">Quản lý thiết bị</div>
          <div className="detail-device">
            <div className="detail-device-content">
              <div className="title-detail-device">Thông tin thiết bị</div>
              <div className="row pt-4">
                <div className="col">
                  <div className="row">
                    <div className="col-3">Mã thiết bị:</div>
                    <div className="col">{selectedDevice.deviceCode}</div>
                  </div>
                </div>
                <div className="col">
                  {" "}
                  <div className="row">
                    <div className="col-3">Loại thiết bị:</div>
                    <div className="col">{selectedDevice.deviceType}</div>
                  </div>
                </div>
              </div>
              <div className="row pt-4">
                <div className="col">
                  <div className="row">
                    <div className="col-3">Tên thiết bị:</div>
                    <div className="col">{selectedDevice.deviceName}</div>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col-3">Tên đăng nhập:</div>
                    <div className="col">1</div>
                  </div>
                </div>
              </div>
              <div className="row pt-4">
                <div className="col">
                  <div className="row">
                    <div className="col-3">Địa chỉ IP:</div>
                    <div className="col">{selectedDevice.ipAddress}</div>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col-3">Mật khẩu:</div>
                    <div className="col">1</div>
                  </div>
                </div>
              </div>
              <div className="row pt-4">
                <div className="col">
                  <div className="row">
                    <div className="">Dịch vụ sử dụng:</div>
                    <div className="pt-2">{selectedDevice.service}</div>
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

export default DetailDevice;
