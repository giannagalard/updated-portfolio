import React from "react";
import Card from "react-bootstrap/Card";
import { RiHandHeartLine } from "react-icons/ri";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi friends! My name is <span className="purple">Gianna</span>, and
            I'm from <span className="purple"> NY</span> !
            <br />I am a senior pursuing my Bachelors in{" "}
            <span className="purple">Computer Science and Mathematics</span> at
            the City College of New York.
            <br />
            <br />
            Apart from coding, some other activities that I love to do !
          </p>
          <ul>
            <li className="about-activity">
              <RiHandHeartLine /> Listening to Music
            </li>
            <li className="about-activity">
              <RiHandHeartLine /> PC Gaming
            </li>
            <li className="about-activity">
              <RiHandHeartLine /> Walks with my Bunny 🐰
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
