import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${({ theme }) => theme.color?.primary200};
    }
`;

export default GlobalStyle;
