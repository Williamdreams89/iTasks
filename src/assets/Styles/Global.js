import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&family=Ultra&display=swap');
    body{
        font-family: "Poppins", sans-serif;
        width: 100vw;
        min-height: 100vh;
    }

    ::-webkit-scrollbar{
        display:none
    }

    a{
        text-decoration: none
    }

    *{
        padding: 0;
        margin: 0;
    }

    ul{
        list-style: none;
    }
`;
