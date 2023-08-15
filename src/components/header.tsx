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
  } else if (location.pathname === "/userinfor") {
    breadcrumbItems.push(
      <Breadcrumb.Item key="device" className="breadcrumb-item">
        Thông tin cá nhân
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
  } else if (location.pathname === "/service") {
    breadcrumbItems.push(
      <Breadcrumb.Item key="device" className="breadcrumb-item-1">
        Dịch vụ
      </Breadcrumb.Item>,
      <Breadcrumb.Item key="device-list" className="breadcrumb-item">
        Danh sách dịch vụ
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
  } else if (location.pathname === "/device/add") {
    breadcrumbItems.push(
      <Breadcrumb.Item key="device" className="breadcrumb-item-1">
        Thiết bị
      </Breadcrumb.Item>,
      <Breadcrumb.Item key="device-list" className="breadcrumb-item-1">
        <NavLink to={"/device"} className="breadcrumb-item-nav">
          Danh sách thiết bị
        </NavLink>
      </Breadcrumb.Item>,
      <Breadcrumb.Item key="device-add" className="breadcrumb-item">
        Thêm thiết bị
      </Breadcrumb.Item>
    );
  } else if (location.pathname === "/service/add") {
    breadcrumbItems.push(
      <Breadcrumb.Item key="service" className="breadcrumb-item-1">
        Dịch vụ
      </Breadcrumb.Item>,
      <Breadcrumb.Item key="service-list" className="breadcrumb-item-1">
        <NavLink to={"/service"} className="breadcrumb-item-nav">
          Danh sách dịch vụ
        </NavLink>
      </Breadcrumb.Item>,
      <Breadcrumb.Item key="service-add" className="breadcrumb-item">
        Thêm dịch vụ
      </Breadcrumb.Item>
    );
  } else if (location.pathname === "/service/detail") {
    breadcrumbItems.push(
      <Breadcrumb.Item key="service" className="breadcrumb-item-1">
        Dịch vụ
      </Breadcrumb.Item>,
      <Breadcrumb.Item key="service-list" className="breadcrumb-item-1">
        <NavLink to={"/service"} className="breadcrumb-item-nav">
          Danh sách dịch vụ
        </NavLink>
      </Breadcrumb.Item>,
      <Breadcrumb.Item key="service-add" className="breadcrumb-item">
        Chi tiết
      </Breadcrumb.Item>
    );
  } else if (location.pathname === "/service/edit") {
    breadcrumbItems.push(
      <Breadcrumb.Item key="service" className="breadcrumb-item-1">
        Dịch vụ
      </Breadcrumb.Item>,
      <Breadcrumb.Item key="service-list" className="breadcrumb-item-1">
        <NavLink to={"/service"} className="breadcrumb-item-nav">
          Danh sách dịch vụ
        </NavLink>
      </Breadcrumb.Item>,
      <Breadcrumb.Item key="service-add" className="breadcrumb-item">
        Cập nhật
      </Breadcrumb.Item>
    );
  } else if (location.pathname === "/givenumber") {
    breadcrumbItems.push(
      <Breadcrumb.Item key="givenumber" className="breadcrumb-item-1">
        Cấp số
      </Breadcrumb.Item>,
      <Breadcrumb.Item key="givenumber-list" className="breadcrumb-item">
        Danh sách cấp số
      </Breadcrumb.Item>
    );
  } else if (location.pathname === "/givenumber/newgivenumber") {
    breadcrumbItems.push(
      <Breadcrumb.Item key="service" className="breadcrumb-item-1">
        Cấp số
      </Breadcrumb.Item>,
      <Breadcrumb.Item key="service-list" className="breadcrumb-item-1">
        <NavLink to={"/givenumber"} className="breadcrumb-item-nav">
          Danh sách cấp số
        </NavLink>
      </Breadcrumb.Item>,
      <Breadcrumb.Item key="service-add" className="breadcrumb-item">
        Cấp số mới
      </Breadcrumb.Item>
    );
  } else if (location.pathname === "/givenumber/detailgivenumber") {
    breadcrumbItems.push(
      <Breadcrumb.Item key="service" className="breadcrumb-item-1">
        Cấp số
      </Breadcrumb.Item>,
      <Breadcrumb.Item key="service-list" className="breadcrumb-item-1">
        <NavLink to={"/givenumber"} className="breadcrumb-item-nav">
          Danh sách cấp số
        </NavLink>
      </Breadcrumb.Item>,
      <Breadcrumb.Item key="service-add" className="breadcrumb-item">
        Chi tiết
      </Breadcrumb.Item>
    );
  } else if (location.pathname === "/reports") {
    breadcrumbItems.push(
      <Breadcrumb.Item key="reports" className="breadcrumb-item-1">
        Báo cáo
      </Breadcrumb.Item>,
      <Breadcrumb.Item key="reports-list" className="breadcrumb-item">
        Lập báo cáo
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
              <NavLink to="/userinfor" className="nav-link">
                <Avatar
                  src={currentUser.avatarUser}
                  alt="User Avatar"
                  className="avt"
                />
              </NavLink>
              <div className="welcome">
                <span className="welcome-text">Xin chào</span> <br />
                <NavLink to="/userinfor" className="nav-link">
                  <span className="user-name">{currentUser.name}</span>
                </NavLink>
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
