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

const DetailGiveNumber: React.FC = () => {
  const dispatch = useDispatch();

  const selectedDevice = useSelector(
    (state: RootState) => state.devices.selectedDevice
  );

  const navigate = useNavigate(); // Sử dụng hook useNavigate thay vì useHistory

  const handleButtonEditClick = () => {
    // Thực hiện chuyển hướng đến trang EditDevice
    navigate("/givenumber");
  };

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
          <div className="title">Quản lý cấp số</div>
          <div className="detail-button">
            <div className="detail-device">
              <div className="detail-device-content">
                <div className="title-detail-device">Thông tin cấp số</div>
                <div className="row pt-4">
                  <div className="col">
                    <div className="row">
                      <div className="col-3 label-text">Họ và tên:</div>
                      <div className="col">{selectedDevice.deviceCode}</div>
                    </div>
                  </div>
                  <div className="col">
                    {" "}
                    <div className="row">
                      <div className="col-3 label-text">Nguồn cấp:</div>
                      <div className="col">{selectedDevice.deviceType}</div>
                    </div>
                  </div>
                </div>
                <div className="row pt-4">
                  <div className="col">
                    <div className="row">
                      <div className="col-3 label-text">Tên dịch vụ:</div>
                      <div className="col">{selectedDevice.deviceName}</div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row">
                      <div className="col-3 label-text">Trạng thái:</div>
                      <div className="col">1</div>
                    </div>
                  </div>
                </div>
                <div className="row pt-4">
                  <div className="col">
                    <div className="row">
                      <div className="col-3 label-text">Số thứ tự:</div>
                      <div className="col">{selectedDevice.ipAddress}</div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row">
                      <div className="col-3 label-text">Số điện thoại:</div>
                      <div className="col">1</div>
                    </div>
                  </div>
                </div>
                <div className="row pt-4">
                  <div className="col">
                    <div className="row">
                      <div className="col-3 label-text">Thời gian cấp:</div>
                      <div className="col">10/09/2023</div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row">
                      <div className="col-3 label-text">Địa chỉ email:</div>
                      <div className="col">aaa@gmail.com</div>
                    </div>
                  </div>
                </div>
                <div className="row pt-4">
                  <div className="col">
                    <div className="row">
                      <div className="col-3 label-text">Hạn sử dụng:</div>
                      <div className="col">10/09/2023</div>
                    </div>
                  </div>
                  <div className="col"></div>
                </div>
              </div>
            </div>
            <button className="button-add" onClick={handleButtonEditClick}>
              <div className="col">
                <Icon icon="system-uicons:wrap-back" className="button-icon" />
                <p>Quay lại</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailGiveNumber;
