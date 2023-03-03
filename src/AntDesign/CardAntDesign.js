import React from "react";
import "../CSS/CardAntDesign.css";
import { Col, Row } from "antd";
import CardData from "../Json/CardData";
import { Card } from "antd";
const { Meta } = Card;

function CardAntDesign() {
  return (
    <>
      <div className="CardAntDesign" id="CardAntDesign">
        <div className="container-fluid">
          <div className="" style={{ padding: "60px 0 0 0" }}>
            <div className="titleHolder">
              <h2>Key Features and Benefits</h2>
            </div>
            <Row gutter={[16, 16]}>
              {CardData.map((value, index) => (
                <Col xs={24} sm={8} md={12} lg={8} xl={8} key={index}>
                  <Card
                    hoverable
                    cover={<img alt="example" src={value.image} />}
                  >
                    <Meta title={value.title} />
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardAntDesign;
