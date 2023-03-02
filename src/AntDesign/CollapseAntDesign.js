import React from "react";
import "../CSS/CollapseAntDesign.css";
import CollapseData from "../Json/CollapseData";
import { Collapse } from "antd";
const { Panel } = Collapse;

function CollapseAntDesign() {
  return (
    <div className="CollapseAntDesign" style={{ margin: "30px 0" }}>
      <div className="container-fluid">
        <div className="" style={{ padding: "30px 0" }}>
          <div className="titleHolder">
            <h2>List</h2>
          </div>
          <div className="">
            <Collapse accordion defaultActiveKey={['0']}>
              {CollapseData.map((value, index) => (
                <Panel header={value.title} key={index}>
                  <p>{value.description}</p>
                </Panel>
              ))}
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollapseAntDesign;
