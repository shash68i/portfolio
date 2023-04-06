import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${({ theme }) => theme.colors?.primary200};
    }

    .theme-text {
        color: ${({ theme }) => theme.colors?.primary600};
        font-size: 1.125rem;
    }

    .container-main {
        width: ${({ theme }) => theme.containerMain.width};
        margin: 0 auto;

        @media (max-width:460px){
            width: ${({ theme }) => theme.containerMain.smallScreenWidth};
        }
    }
`;

export default GlobalStyle;
