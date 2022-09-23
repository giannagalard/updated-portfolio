import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiGithubAlt } from "react-icons/di";
import { Tooltip } from "@material-ui/core";

function GitLogo() {
  return (
    <a href="https://lofi-git.vercel.app/user/giannagalard" target="_blank">
      <Row
        style={{
          justifyContent: "center",
          paddingTop: "5px",
          paddingBottom: "10px",
        }}
      >
        <Tooltip title="Click me to see my stats!" placement="top">
          <Col xs={4} md={4} className="tech-icons">
            <DiGithubAlt color="white" />
          </Col>
        </Tooltip>
      </Row>
    </a>
  );
}

export default GitLogo;
