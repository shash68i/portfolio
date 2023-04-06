import styled from "styled-components";

const StyledWrapper = styled.nav`
  height: 64px;
  margin-bottom: 24px;

  .nav {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-items {
    display: flex;
    gap: 1.8rem;
    align-items: center;

    a {
      color: ${({ theme }) => theme.colors.primary600};
    }
    a:hover {
      text-decoration: underline;
    }
  }

  .theme-toggle-button {
    all: unset;
    cursor: pointer;
  }
`;

export default StyledWrapper;
