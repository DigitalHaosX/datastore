import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";

const PersonFormDetails = ({ id, label, to }) => {
  return (
    <Row align="top" gutter={[16, 16]}>
      <Col>
        <Link to={`/persons/${id}/${to}`}>{label}</Link>
      </Col>
    </Row>
  );
};

export default PersonFormDetails;
