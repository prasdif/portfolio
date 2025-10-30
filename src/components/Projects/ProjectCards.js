import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

function ProjectCards(props) {
  const isGithubRepo = props.title === "Github Repo"; // 👈 check for that project

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Show Demo button if demoLink is provided */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
          >
            {isGithubRepo ? (
              <>
                <FaGithub /> &nbsp; GitHub
              </>
            ) : (
              <>
                <CgWebsite /> &nbsp; Demo
              </>
            )}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
