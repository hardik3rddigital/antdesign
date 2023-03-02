import React from "react";
import '../CSS/HeaderAntDesign.css'
import { Layout, Menu } from "antd";
const { Header } = Layout;


function HeaderAntDesign() {
  

  return (
    <>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["0"]}

          >
            <Menu.Item key="1">About</Menu.Item>
            <Menu.Item key="2">Services</Menu.Item>
            <Menu.Item key="3">Blog</Menu.Item>
            <Menu.Item key="4">Careers</Menu.Item>
            <Menu.Item key="5">Team</Menu.Item>
            <Menu.Item key="6">Contact</Menu.Item>
          </Menu>
        </Header>
      </Layout>
    </>
  );
}

export default HeaderAntDesign;
