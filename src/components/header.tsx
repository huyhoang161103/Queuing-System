import React from "react";
import { useSelector } from "react-redux"; // Import useSelector from Redux
import { NavLink, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Avatar, Breadcrumb } from "antd";
import "./components.css";

const Header: React.FC = () => {
  const location = useLocation();
  const currentUser = useSelector((state: any) => state.user.currentUser);

  const breadcrumbItems = [];

  if (location.pathname === "/dashboard") {
    breadcrumbItems.push(
      <Breadcrumb.Item key="dashboard" className="breadcrumb-item">
        Dashboard
      </Breadcrumb.Item>
    );
  } else if (location.pathname === "/device") {
    breadcrumbItems.push(
      <Breadcrumb.Item key="device" className="breadcrumb-item-1">
        Thiết bị
      </Breadcrumb.Item>,
      <Breadcrumb.Item key="device-list" className="breadcrumb-item">
        Danh sách thiết bị
      </Breadcrumb.Item>
    );
  } else if (location.pathname === "/device/detail") {
    breadcrumbItems.push(
      <Breadcrumb.Item key="device" className="breadcrumb-item-1">
        Thiết bị
      </Breadcrumb.Item>,
      <Breadcrumb.Item key="device-list" className="breadcrumb-item-1">
        <NavLink to={"/device"} className="breadcrumb-item-nav">
          Danh sách thiết bị
        </NavLink>
      </Breadcrumb.Item>,
      <Breadcrumb.Item key="device-detail" className="breadcrumb-item">
        Chi tiết thiết bị
      </Breadcrumb.Item>
    );
  } else if (location.pathname === "/device/edit") {
    breadcrumbItems.push(
      <Breadcrumb.Item key="device" className="breadcrumb-item-1">
        Thiết bị
      </Breadcrumb.Item>,
      <Breadcrumb.Item key="device-list" className="breadcrumb-item-1">
        <NavLink to={"/device"} className="breadcrumb-item-nav">
          Danh sách thiết bị
        </NavLink>
      </Breadcrumb.Item>,
      <Breadcrumb.Item key="device-edit" className="breadcrumb-item">
        Cập nhật thiết bị
      </Breadcrumb.Item>
    );
  }

  return (
    <div className="header">
      <Breadcrumb separator=" ">{breadcrumbItems}</Breadcrumb>
      <div className="notification-avatar">
        <div className="noti">
          <Icon icon="ion:notifcations" className="notification-icon" />
        </div>
        <div className="info">
          {currentUser ? (
            <React.Fragment>
              <Avatar
                src={currentUser.avatarUser}
                alt="User Avatar"
                className="avt"
              />
              <div className="welcome">
                <span className="welcome-text">Xin chào</span> <br />
                <span className="user-name">{currentUser.name}</span>
              </div>
            </React.Fragment>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
