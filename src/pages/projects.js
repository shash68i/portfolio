import GlobalStyle from "../globalStyles";
import ContentCard from "../components/ContentCard/ContentCard";
import StyledWrapper from "./../pageStyles/projectStyles";
import { projectList } from "./../data/projectList";

const Projects = () => {
  return (
    <StyledWrapper className="container">
      <GlobalStyle />
      <div className="projects-page container-main">
        <h1>My Projects</h1>
        <div className="content-list">
          {/* <ContentCard /> */}
          {projectList.map(({ title, dateTime, description, link }) => {
            return (
              <ContentCard
                title={title}
                dateTime={dateTime}
                description={description}
                link={link}
              />
            );
          })}
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Projects;
