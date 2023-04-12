import Link from "next/link";
import StyledWrapper from "./StyledWrapper";

const BlogCard = ({ title, dateTime, description, link }) => {
  return (
    <StyledWrapper>
      <h2 className="card-title">
        <Link target="_blank" href={link}>
          {title}
        </Link>
      </h2>
      <div className="card-date">{dateTime}</div>
      <div className="card-description">
        {description}{" "}
        <Link target="_blank" href={link}>
          <span className="see-more">...read more</span>
        </Link>
      </div>
    </StyledWrapper>
  );
};

export default BlogCard;
