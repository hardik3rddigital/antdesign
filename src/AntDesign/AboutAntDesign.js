import React from "react";
import { Col, Row } from "antd";
import "../CSS/AboutAntDesign.css";
import AboutDataSingleAbout from "../Json/AboutData";

function AboutAntDesign() {
  return (
    <div className="AboutAntDesign" style={{ padding: "60px" }}>
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>About Us</h2>
        </div>
        <div className="contentHolder">
          We build iOS Apps, Android Apps, Websites, AR Apps, IOT Apps,
          Cognitive personal assistants, AI powered chat bots, Apple TV Apps,
          Apple Watch Apps, Alexa skills and custom software. We solve your
          problems with efficient and affordable solutions. Our developers are
          extremely well versed in their technical backgrounds, and our global
          presence allows us to work quickly and effectively with clients.
        </div>

        <div className="" style={{ padding: "30px 0" }}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {AboutDataSingleAbout.map((value, index) => (
              <Col xs={24} sm={8} md={12} lg={8} xl={8} key={index}>
                <div className="AboutDataSingleAbout">
                  <div className="AboutDataIcon">
                    <i className={value.aboutIcon}></i>
                  </div>
                  <div className="AboutData">
                    <h4>{value.title}</h4>
                    <p>{value.description}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default AboutAntDesign;
