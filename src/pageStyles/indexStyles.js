import styled from "styled-components";

const StyledWrapper = styled.main`
  .about-item {
    line-height: 2.2;
    margin-bottom: 1.5rem;
  }

  h1 {
    display: inline-block;
    font-size: 2.75rem;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.primary900};
    border-radius: 2px;
    margin-top: 4rem;
    margin-bottom: 0.8rem;

    @media (max-width: 460px) {
      margin-top: 0;
    }
  }
`;

export default StyledWrapper;
