import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Showcase from "../../Assets/Projects/showcase.png";
import LofiGit from "../../Assets/Projects/lofigit.png";
import Fluffle from "../../Assets/Projects/fluffle.png";
import Astro from "../../Assets/Projects/astro.png";
import Realty from "../../Assets/Projects/realty.png";
import Cpu from "../../Assets/Projects/cpu.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}></p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Showcase}
              isBlog={false}
              title="CSI Student Showcase, Hackathon Winner"
              techstack="Figma, firebase, JavaScript, React.js, Material UI, React Router"
              description="Developed a web app to help CSI students stand out to recruiters by displaying their skills, interests, and top projects along with their GitHub and LinkedIn profiles."
              link="https://devpost.com/software/csi-student-showcase"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LofiGit}
              isBlog={false}
              title="Lofi Git"
              techstack="GitHub REST API, TypeScript, React.ts, Material-UI, Figma"
              description="Developed a website where you can enter your username and view your public stats from Github."
              link="https://github.com/giannagalard/lofi-git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Fluffle}
              isBlog={false}
              title="Fluffle, Hackathon Winner"
              techstack="Javascript, HTML, CSS"
              description="Developed a website where you can track your emotions, journal daily, read positive affirmations,  
                and meditate with the breathing assistant."
              link="https://devpost.com/software/fluffle"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Astro}
              isBlog={false}
              title="Astronaut Joyride"
              techstack="C#, Unity, Adobe Photoshop"
              description="Developed a 2D game where you play as an astronaut and dodge asteroids while collecting fuel tanks."
              link="https://github.com/giannagalard/Astronaut-Joyride"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Cpu}
              isBlog={false}
              title="CPU Scheduling Algorithms"
              techstack="C++, Vim"
              description="Developed a program that simulates the CPU scheduling algorithms: First Come First Serve, and Round Robin."
              link="https://github.com/giannagalard/CPU-Scheduling"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Realty}
              isBlog={false}
              title="Realty Service"
              techstack="Java, Java Swing"
              description="Developed a program where users can search for homes and apartments for sale and/or list their homes for sale and locate an available real estate agent."
              link="https://github.com/giannagalard/Real-Estate"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
