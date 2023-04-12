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
  }

  .card-title-link:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .card-date {
    font-size: 1rem;
    font-style: italic;
    margin-bottom: 1rem;
  }

  .card-description {
    font-size: 1.1rem;
  }

  .btn {
    all: unset;
  }

  .source {
    color: ${({ theme }) => theme.colors.secondary400};
  }

  .expand-collapse {
    color: ${({ theme }) => theme.colors.secondary300};
    cursor: pointer;
  }
`;

export default StyledWrapper;
