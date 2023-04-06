import styled from "styled-components";

const StyledWrapper = styled.span`
  padding: 4px 8px;
  margin: 0 2px;
  color: ${({ theme }) => theme.colors.badgeText};
  background-color: ${({ theme }) => theme.colors.secondary200};
  border-radius: ${({ theme }) => theme.borders.primary100};
`;

export default StyledWrapper;
