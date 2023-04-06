import React from "react";
import GlobalStyle from "../globalStyles";
import StyledWrapper from "./../pageStyles/blogStyles";

const Blogs = () => {
  return (
    <StyledWrapper className="container">
      <GlobalStyle />
      <div className="blogs-page container-main">Blog</div>
    </StyledWrapper>
  );
};

export default Blogs;
