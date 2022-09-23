import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiKotlin, SiJava, SiJavascript, SiReact, SiGit } from "react-icons/si";
import { Tooltip } from "@material-ui/core";

// https://react-icons.github.io/react-icons/search?q=cgc
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Tooltip title="Java" placement="bottom">
        <Col xs={4} md={2} className="tech-icons">
          <SiJava />
        </Col>
      </Tooltip>
      <Tooltip title="Kotlin" placement="bottom">
        <Col xs={4} md={2} className="tech-icons">
          <SiKotlin />
        </Col>
      </Tooltip>
      <Tooltip title="JavaScript" placement="bottom">
        <Col xs={4} md={2} className="tech-icons">
          <SiJavascript />
        </Col>
      </Tooltip>
      <Tooltip title="React" placement="bottom">
        <Col xs={4} md={2} className="tech-icons">
          <SiReact />
        </Col>
      </Tooltip>
      <Tooltip title="Git" placement="bottom">
        <Col xs={4} md={2} className="tech-icons">
          <SiGit />
        </Col>
      </Tooltip>
    </Row>
  );
}

export default Techstack;
