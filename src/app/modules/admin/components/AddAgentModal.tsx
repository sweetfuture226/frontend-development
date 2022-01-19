import React, { useState } from "react";
import { Modal, Input, Button } from "antd";
// import "antd/dist/antd.css";
type Props = {
  isModalVisible: any;
  setIsModalVisible: any;
};

const ModalAgent = ({ isModalVisible, setIsModalVisible }: Props) => {
  const { TextArea } = Input;
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal
        title="Add Agent Note"
        visible={isModalVisible}
        // onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button
            key="submit"
            onClick={handleOk}
            style={{
              background: "#000",
              color: "#fff",
              width: "110px",
              height: "35px",
            }}
          >
            Save
          </Button>,
          <Button
            key="submit"
            onClick={handleCancel}
            style={{ width: "110px", height: "35px", marginLeft: "46px" }}
          >
            Cancel
          </Button>,
        ]}
        className="moda-agent"
      >
        <div className="input-name">
          <p>Title or Question</p>
          <Input placeholder="" />
        </div>
        <div className="input-textarea">
          <p>Description or Answer</p>
          <TextArea rows={10} />
        </div>
      </Modal>
    </>
  );
};

export default ModalAgent;
