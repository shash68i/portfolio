import Link from "next/link";
import StyledWrapper from "./StyledWrapper";
import { useState } from "react";

const ProjectCard = ({ title, dateTime, description, link }) => {
  const [shortDesc, setShortDesc] = useState(description.slice(0, 220));
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <StyledWrapper>
      <h2 className={`card-title ${link !== "" ? "card-title-link" : ""}`}>
        {link !== "" ? (
          <Link target="_blank" href={link}>
            {title}
          </Link>
        ) : (
          title
        )}
      </h2>
      <div className="card-date">{dateTime}</div>
      <div className="card-description">
        {link !== "" ? (
          <Link target="_blank" href={link}>
            <span className="source">[source] </span>
          </Link>
        ) : null}
        {isExpanded ? description : shortDesc}{" "}
        {!isExpanded ? (
          <button
            className="expand-collapse btn"
            onClick={() => setIsExpanded(true)}
          >
            ...see more
          </button>
        ) : (
          <button
            className="expand-collapse btn"
            onClick={() => setIsExpanded(false)}
          >
            ...see less
          </button>
        )}
      </div>
    </StyledWrapper>
  );
};

export default ProjectCard;
