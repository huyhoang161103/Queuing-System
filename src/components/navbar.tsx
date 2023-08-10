import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Menu } from "antd";

import "./components.css";
import { SettingOutlined } from "@ant-design/icons";
const { SubMenu } = Menu;

const Navbar: React.FC = () => {
  const location = useLocation();
  const [selectedMenuItem, setSelectedMenuItem] = useState("");

  useEffect(() => {
    // Xác định mục menu được chọn dựa trên URL hiện tại
    const pathname = location.pathname;
    setSelectedMenuItem(pathname);
  }, [location]);

  return (
    <div className="menu">
      <div className="navbar">
        <div className="col">
          <div className="logo">
            <NavLink to="/">
              <img src="/img/Group.svg" alt="Logo" />
            </NavLink>
          </div>

          <Menu mode="inline" style={{ width: 256 }} className="navigation">
            <Menu.Item
              key="dashboard"
              className={`menu-item ${
                selectedMenuItem === "/dashboard" ? "selected" : ""
              }`}
            >
              <NavLink to="/dashboard">
                <Icon icon="humbleicons:dashboard" /> Dashboard
              </NavLink>
            </Menu.Item>
            <Menu.Item
              key="device"
              className={`menu-item ${
                selectedMenuItem.startsWith("/device") ? "selected" : ""
              }`}
            >
              <NavLink to="/device">
                <Icon icon="solar:monitor-outline" /> Thiết bị
              </NavLink>
            </Menu.Item>

            <Menu.Item
              key="services"
              className={`menu-item ${
                selectedMenuItem.startsWith("/service") ? "selected" : ""
              }`}
            >
              <NavLink to="/service">
                <Icon icon="ion:chatbubbles-outline" /> Dịch vụ
              </NavLink>
            </Menu.Item>

            <Menu.Item
              key="givenumber"
              className={`menu-item ${
                selectedMenuItem.startsWith("/givenumber") ? "selected" : ""
              }`}
            >
              <NavLink to="/givenumber">
                <Icon icon="lucide:layers" /> Cấp số
              </NavLink>
            </Menu.Item>

            <Menu.Item
              key="reports"
              className={`menu-item ${
                selectedMenuItem === "/reports" ? "selected" : ""
              }`}
            >
              <NavLink to="/reports">
                <Icon icon="fluent-mdl2:report-document" /> Báo cáo
              </NavLink>
            </Menu.Item>

            <SubMenu
              key="settings"
              title={
                <NavLink to="/settings" className="menu-item">
                  <Icon icon="ri:settings-line" className="me-2" />
                  Cài đặt hệ thống
                </NavLink>
              }
              popupClassName="right-submenu"
            >
              {" "}
              <Menu.Item key="systemSettings" className="menu-item">
                <NavLink to="/system-settings">Cài đặt hệ thống</NavLink>
              </Menu.Item>
              <Menu.Item key="accountSettings" className="menu-item">
                <NavLink to="/account-settings">Cài đặt tài khoản</NavLink>
              </Menu.Item>
            </SubMenu>
            <div className="menu-footer">
              <Menu.Item key="logout">
                <NavLink to="/logout">
                  <Icon icon="lucide:log-out" className="me-2" />
                  Đăng xuất
                </NavLink>
              </Menu.Item>
            </div>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
