import React from "react";
import GlobalStyle from "../globalStyles";
import StyledWrapper from "./../pageStyles/projectStyles";

const Projects = () => {
  return (
    <StyledWrapper className="container">
      <GlobalStyle />
      <div className="projects-page container-main">Projects</div>
    </StyledWrapper>
  );
};

export default Projects;
