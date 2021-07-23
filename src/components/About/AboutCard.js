import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Gianna Galard </span>
            from <span className="purple"> New York.</span>
            <br />I am a junior pursuing my Bachelors in Computer Science and Mathematics at the City College of New York.
            <br />
            <br />
            Apart from coding, some other activities that I love to do !
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening to Music + Podcasts
            </li>
            <li className="about-activity">
              <ImPointRight /> PC Gaming
            </li>
            <li className="about-activity">
              <ImPointRight /> Walks with my Bunny 🐰
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            “I’ll just warn you now, I don’t know how to use a computer.”{" "}
          </p>
          <footer className="blockquote-footer">Sailor Moon</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
