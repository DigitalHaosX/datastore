import React from "react";
import { Row, Col } from "antd";
import TeamInputCall from "./TeamInputCall";

const TeamInput = ({ value, onChange }) => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={6}>
        <TeamInputCall value={value} onChange={onChange} color="red" />
      </Col>

      <Col span={6}>
        <TeamInputCall value={value} onChange={onChange} color="yellow" />
      </Col>
      <Col span={6}>
        <TeamInputCall value={value} onChange={onChange} color="blue" />
      </Col>
      <Col span={6}>
        <TeamInputCall value={value} onChange={onChange} color="green" />
      </Col>
    </Row>
  );
};

export default TeamInput;
