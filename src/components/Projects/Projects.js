import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="ILETS-student-application"
              description="A modern IELTS coaching website built with React, featuring a responsive design, course details, testimonials, and a newsletter signup to help students prepare for their IELTS exams effectively."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://iletsinstitute.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Github Repo"
              description="A React app that uses the GitHub API to display popular repositories by programming language, showing stars, forks, and issues with a clean and responsive UI."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://github.com/prasdif/Github-Popular-Repos"              
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;