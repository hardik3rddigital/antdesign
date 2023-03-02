import React from "react";
import "../CSS/HeaderAntDesign.css";

import { Layout } from "antd";

import HeaderAntDesign from "./HeaderAntDesign";

const { Header } = Layout;

function LayoutAntDesign() {
  return (
    <>
      <Layout className="layout">
        <Header>
          <HeaderAntDesign />
        </Header>
      </Layout>
    </>
  );
}

export default LayoutAntDesign;
