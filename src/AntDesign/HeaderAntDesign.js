import React from "react";
import { Menu } from "antd";

function HeaderAntDesign() {
  return (
    <>
      <div className="logo">Logo</div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["About"]}>
        <Menu.Item key="About">About</Menu.Item>
        <Menu.Item key="Services">Services</Menu.Item>
        <Menu.Item key="Blog">Blog</Menu.Item>
        <Menu.Item key="Careers">Careers</Menu.Item>
        <Menu.Item key="Team">Team</Menu.Item>
        <Menu.Item key="Contact">Contact</Menu.Item>
      </Menu>
    </>
  );
}

export default HeaderAntDesign;
