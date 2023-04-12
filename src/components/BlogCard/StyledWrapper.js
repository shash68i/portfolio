import styled from "styled-components";

const StyledWrapper = styled.div`
  margin-top: 2rem;
  color: ${({ theme }) => theme.colors.primary600};
  a {
    color: inherit;
  }

  .card-title {
    display: inline-block;
    font-size: 1.8rem;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .card-date {
    font-size: 1rem;
    font-style: italic;
    margin-bottom: 1rem;
  }

  .card-description {
    font-size: 1.1rem;
  }

  .see-more {
    color: ${({ theme }) => theme.colors.secondary300};

    a {
      color: inherit;
    }

    &:hover {
      cursor: pointer;
    }
  }
`;

export default StyledWrapper;
