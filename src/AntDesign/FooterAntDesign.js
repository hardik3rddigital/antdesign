import React from "react";

import "../CSS/FooterAntDesign.css";

import { Layout } from "antd";
import { BackTop } from "antd";
const { Footer } = Layout;

function FooterAntDesign() {
  return (
    <div
      className="FooterAntDesign backGround"
      style={{ margin: "30px 0 0 0" }}
      id="FooterAntDesign"
    >
      <div className="container-fluid">
        <div className="">
          <div className="">
            <Footer className="backGround">
              <div className="footer">
                <div className="logo" style={{ textAlign: "center" }}>
                  Logo
                </div>
                <ul className="socials">
                  <li>
                    <a href="https://www.facebook.com/">
                      <i className="fa fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com/">
                      <i className="fa fa-pinterest-p" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
                <div className="copyright" style={{ textAlign: "center" }}>
                  Copyright © 2023 Company Name
                </div>
                <div className="ant-back-top" style={{ textAlign: "end" }}>
                  <div className>
                    <BackTop className="goTop">
                      <i className="fa fa-arrow-circle-up" />
                    </BackTop>
                  </div>
                </div>
              </div>
            </Footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterAntDesign;
