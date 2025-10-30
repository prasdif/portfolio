import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Prasad Borse</span> from{" "}
            <span className="purple">Mumbai, India</span>.
            <br />
            I’m a <span className="white">Full Stack Developer</span> passionate
            about building <span className="white">dynamic</span>,{" "}
            <span className="purple">high-performance</span> web applications.
            <br />
            I specialize in{" "}
            <span className="white">React</span>,{" "}
            <span className="white">Node.js</span>,{" "}
            <span className="white">Express</span>, and{" "}
            <span className="white">MongoDB</span>, and love turning ideas into{" "}
            <span className="white">clean</span>,{" "}
            <span className="white">scalable solutions</span>.
            <br />
            Currently exploring <span className="purple">modern tech stacks</span>{" "}
            and constantly improving my craft to deliver{" "}
            <span className="purple">top-notch digital experiences</span>.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Prasad</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
