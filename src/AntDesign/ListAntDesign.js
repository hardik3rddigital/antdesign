import React from "react";
import "../CSS/ListAntDesign.css";
import { Card, List } from "antd";

const data = [
  {
    title: "Title 1",
  },
  {
    title: "Title 2",
  },
  {
    title: "Title 3",
  },
  {
    title: "Title 4",
  },
  {
    title: "Title 5",
  },
  {
    title: "Title 6",
  },
];

function ListAntDesign() {
  return (
    <div
      className="ListAntDesign"
      style={{ margin: "30px 0" }}
      id="ListAntDesign"
    >
      <div className="container-fluid">
        <div className="" style={{ padding: "30px 0" }}>
          <div className="titleHolder">
            <h2>List</h2>
          </div>
          <div className="">
            <List
              grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 6,
                xxl: 3,
              }}
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <Card title={item.title}>Card content</Card>
                </List.Item>
              )}
            >
              {/* {data.map((value, index) => (
                <List.Item key={index}>
                  <Card title={value.title}>Card content</Card>
                </List.Item>
              ))} */}
            </List>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListAntDesign;
