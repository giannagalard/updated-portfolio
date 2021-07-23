import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import cpu from "../../Assets/Projects/cpu.png";
import covid from "../../Assets/Projects/covid.png";
import realty from "../../Assets/Projects/realty.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={realty}
              isBlog={false}
              title="Realty Service"
              description="Our house listing service is a program where users can search homes / apartments for sale and list their homes for sale. We also have a sign-up / sign-in feature, along with an agent search to help you get the perfect match to find your forever home. Built with Java and Java Swing."
              link="https://github.com/giannagalard/Real-Estate"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cpu}
              isBlog={false}
              title="CPU SCHEDULING"
              description="Uses CPU scheduling algrorithms such as First Come First Serve and Round Robin, Built with C++ using Vim."
              link="https://github.com/giannagalard/CPU-Scheduling"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covid}
              isBlog={false}
              title="Covid Case Heat Map"
              description="Our program generates heat maps showing the high-risk areas of Staten Island. We have also integrated a chat bot named Nurse Joy who offers you the ability to take a questionnaire going over your symptoms. If you feel like you need to get tested for COVID after chatting with Nurse Joy, we also offer a list of available COVID testing sites on Staten Island."
              link="https://github.com/giannagalard/Covid-Case-Heat-Map"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
