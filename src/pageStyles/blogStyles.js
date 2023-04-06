import styled from "styled-components";

const StyledWrapper = styled.main`
  h1 {
    display: inline-block;
    font-size: 2.3rem;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.primary900};
    margin-top: 1rem;

    @media (max-width: 460px) {
      margin-top: 0;
      font-size: 2rem;
    }
  }
`;

export default StyledWrapper;
