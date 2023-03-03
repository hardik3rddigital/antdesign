import React from "react";
import "../CSS/HeaderAntDesign.css";

import { Layout } from "antd";

import HeaderAntDesign from "./HeaderAntDesign";
import HeroAntDesign from "./HeroAntDesign";
import FooterAntDesign from "./FooterAntDesign";

const { Header, Content } = Layout;

function LayoutAntDesign() {
  return (
    <>
      <Layout className="layout">
        <Header>
          <HeaderAntDesign />
        </Header>
        <Content>
          <HeroAntDesign />
        </Content>

        <FooterAntDesign />
      </Layout>
    </>
  );
}

export default LayoutAntDesign;
