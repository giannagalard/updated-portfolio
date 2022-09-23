import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiEclipseide,
  SiAndroidstudio,
} from "react-icons/si";
import { Tooltip } from "@material-ui/core";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Tooltip title="Visual Studio Code" placement="bottom">
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode />
        </Col>
      </Tooltip>
      <Tooltip title="Android Studio" placement="bottom">
        <Col xs={4} md={2} className="tech-icons">
          <SiAndroidstudio />
        </Col>
      </Tooltip>
      <Tooltip title="Eclipse" placement="bottom">
        <Col xs={4} md={2} className="tech-icons">
          <SiEclipseide />
        </Col>
      </Tooltip>
    </Row>
  );
}

export default Toolstack;
