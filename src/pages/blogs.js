import GlobalStyle from "../globalStyles";
import ContentCard from "../components/ContentCard/ContentCard";
import StyledWrapper from "./../pageStyles/blogStyles";
import { blogList } from "./../data/blogList";

const Blogs = () => {
  return (
    <StyledWrapper className="container">
      <GlobalStyle />
      <div className="blogs-page container-main">
        <h1>My Blogs</h1>
        <div className="content-list">
          {/* <ContentCard /> */}
          {blogList.map(({ title, dateTime, description, link }) => {
            return (
              <ContentCard
                title={title}
                dateTime={dateTime}
                description={description}
                link={link}
                readMore={link !== ""}
              />
            );
          })}
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Blogs;
