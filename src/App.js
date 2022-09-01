import "./App.css";
import "antd/dist/antd.css";
import React, { useState } from "react";
import { Button, Select, Modal } from "antd";
const { Option } = Select;
function App() {
  const [SelectValue, setSelectValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [errorDisplay, setErroDisplay] = useState(false);

  const handleOk = () => {
    if (isValid) {
      setErroDisplay(false);
    } else {
      setErroDisplay(true);
    }
  };
  const handleCancel = () => {};
  const handleChange = (value) => {
    setSelectValue(value);
    setIsValid(true);
    setErroDisplay(false);
  };

  return (
    <Modal
      title="Basic Modal"
      visible={true}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <form>
        <Select value={SelectValue} onChange={handleChange}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
        </Select>
        {errorDisplay && <p> Error displayed</p>}
      </form>
    </Modal>
  );
}

export default App;
