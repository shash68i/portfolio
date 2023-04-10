import Head from "next/head";
import GlobalStyle from "../globalStyles";
import ContentCard from "../components/ContentCard/ContentCard";
import StyledWrapper from "./../pageStyles/blogStyles";
import { blogList } from "./../data/blogList";
import { DESCRIPTION } from "../data/descriptions";

const Blogs = () => {
  return (
    <>
      <Head>
        <title>Blogs - Shashank Kashyap</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={DESCRIPTION.BLOGS} />
        <meta property="og:description" content={DESCRIPTION.BLOGS} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="www.shashankkashyap.com/blogs" />
      </Head>

      <GlobalStyle />

      <StyledWrapper className="container">
        <div className="blogs-page container-main">
          <h1>My Blogs</h1>
          <div className="content-list">
            {/* <ContentCard /> */}
            {blogList.map(({ id, title, dateTime, description, link }) => {
              return (
                <ContentCard
                  key={id}
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
    </>
  );
};

export default Blogs;
