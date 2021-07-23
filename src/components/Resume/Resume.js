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
              title="SOCIAL MEDIA INTERN"
              date="September 2018 - November 2018"
              content={[
                "I worked with Super STARS Academic Services during the fall semester as a blog writer and social media intern.",
                "I worked on improving their social media following as well as updating their company website.",
              ]}
            />
            <Resumecontent
              title="REAL ESTATE BLOGGER"
              date="July 2018 - August 2018"
              content={[
                "There were two main components to the task including photography, and writing.",
                "I would have to say my favorite aspect of interning here was working independently yet still being a part of a team.",
              ]}
              />
              <Resumecontent
                title ="IT SUPPORT TECHNICIAN"
                date="September 2017 - June 2018"
                content={[
                  "I worked with the school technician on Fridays to repair broken laptops and anything else that needed to be repaired.",
                  "I also took inventory of the laptop carts in each classroom and checked to ensure that everything was fine and working."
                ]}
              />
          </Col>
          <Col md={6} className="resume-right">
          <h3 className="resume-title">Certifications and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                "The National Society of Leadership and Success",
                "Advanced Java Programming 2021",
                "Advanced Python: Working with Databases 2021",
                "C++ Essential Training 2021",
                "Git Intermediate Techniques 2021",
                "Troubleshooting IT Remote Administration 2021",
              ]}
            />
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="CITY COLLEGE OF NEW YORK | CSI"
              date="2019 - Present"
              content={["BS in Computer Science and Mathematics"]}
            />
            <h3 className="resume-title">Clubs</h3>
            <Resumecontent
              title="WOMEN IN TECHNOLOGY | WIT"
              date="October 2020 - Present"
              content={["Founding Member"]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
