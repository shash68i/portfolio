import Link from "next/link";
import StyledWrapper from "./StyledWrapper";

const ContentCard = ({ title, dateTime, description, link, readMore }) => {
  return (
    <StyledWrapper>
      <h2 className="card-title">
        {readMore ? (
          <Link target="_blank" href={link}>
            {title}
          </Link>
        ) : (
          title
        )}
      </h2>
      <div className="card-date">{dateTime}</div>
      <div className="card-description">
        {description}{" "}
        {readMore ? (
          <Link target="_blank" href={link}>
            <span className="see-more">...read more</span>
          </Link>
        ) : null}
      </div>
    </StyledWrapper>
  );
};

export default ContentCard;
