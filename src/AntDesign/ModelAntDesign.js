import React, { useState } from "react";
import "../CSS/ModelAntDesign.css";
import { Button, Modal } from "antd";

function ModelAntDesign() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="ModelAntDesign" style={{ margin: "60px 0 0 0" }}>
        <div className="container-fluid">
          <div className="" style={{ padding: "30px 0" }}>
            <div className="titleHolder">
              <h2>How it works</h2>
              <p>check our latest video to know how it works</p>
            </div>
            <div className="" style={{ textAlign: "center" }}>
              <Button type="text" onClick={showModal} size={"large"}>
                <i
                  className="fa fa-play-circle-o"
                  aria-hidden="true"
                  style={{ fontSize: "140px", color: "#ffffff" }}
                ></i>
              </Button>
              <Modal
                title="Basic Modal"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
              >
                <iframe
                  src="https://3rddigital.com/about"
                  title="myFrame"
                  style={{ width: "100%" }}
                ></iframe>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModelAntDesign;
