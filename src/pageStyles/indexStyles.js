import styled from "styled-components";

const StyledWrapper = styled.main`
  .about-item {
    line-height: 2.2;
    margin-bottom: 1.5rem;

    @media (max-width: 460px) {
      line-height: 2;
    }
  }

  h1 {
    font-size: 2.75rem;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.primary900};
    margin-top: 4rem;
    margin-bottom: 0.8rem;

    @media (max-width: 460px) {
      margin-top: 0;
      font-size: 2.4rem;
    }
    @media (max-width: 394px) {
      margin-top: 0;
      font-size: 2.1rem;
    }
  }

  .email-link:hover {
    text-decoration: underline;
    color: inherit;
  }
`;

export default StyledWrapper;
