import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${({ theme }) => theme.colors?.primary200};
        scroll-behavior: smooth;
    }

    /* Scrollbar behaviour */
    body::-webkit-scrollbar {
        width: 0.5em;
    }
 
    body::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.colors.scrollTrack};
    }
 
    body::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.scrollThumb};
        outline: none;
        border-radius: 10px;

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
