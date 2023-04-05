import styled from "styled-components";

const StyledWrapper = styled.nav`
  height: 64px;

  .nav {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-items {
    display: flex;
    gap: 1.8rem;
  }

  .theme-toggle-button {
    all: unset;
    cursor: pointer;
  }
`;

export default StyledWrapper;
