import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Gianna-Galard.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              company="Lowe's Home Improvement"
              title="Android Development Intern"
              date="May 2022 - Aug 2022"
              content={[
                "Embedded WireMock in the Debug Lowe's QA App so that developers could run the service within the app without launching and maintaining external tools.",
                "Wrote UI tests for multiple scenarios in the Payment Methods section of the wallet using Espresso and WireMock to ensure proper app functionality and seamless experience for the customer.",
                "Participated in Agile routines and ceremonies such as Daily Standup, Backlog Grooming, Sprint Planning, Refinement, Demos.",
              ]}
            />
            <Resumecontent
              company="Office of Information Technology Services"
              title="Computer Lab Assistant"
              date="Jan 2022 - Aug 2022"
              content={[
                "Assisted students and professors with computer use, software, and equipment such as printers and projectors.",
                "Maintained the front desk in the library lab and ensured students followed the computer lab's rules and protocols.",
                "Operated the labs on campus by opening and closing them on a timely schedule.",
              ]}
            />
            <Resumecontent
              company="New Venture's Charter School"
              title="IT Support Technician Intern"
              date="Sep 2017 - Jun 2018"
              content={[
                "Maintained detailed and up-to-date inventory of all technological equipment.",
                "Utilized and repaired all standard office/school equipment.",
                "Performed thorough diagnostics, repairs, & testing of various desktops, laptops, and tablets.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Certifications and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                "The National Society of Leadership and Success",
                "Advanced Java Programming",
                "Advanced Python: Working with Databases",
                "Git Intermediate Techniques",
              ]}
            />
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              company="City College of NY - CSI"
              date="2019 - 2022"
              title="BS in Computer Science and Mathematics"
              content={[]}
            />
            <h3 className="resume-title">Clubs</h3>
            <Resumecontent
              company="Women in Technology | WIT"
              title="Founding Member and Treasurer"
              date="2020 - 2022"
              content={[
                "Assisted the president and officers in preparing program budgets and financial controls.",
                "Established proper financial guidelines and ensured that adequate budget and financial controls are maintained.",
                "Oversaw and coordinated budget requests for the allocated budget.",
                "Carefully followed the instructions from the Director of Student Life and Activities regarding budget requests and member registry.",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
