import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,*::before,*::after {
    box-sizing: border-box;
  }

  html {
    font-family: "Roboto", sans-serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
    font-variation-settings: "wdth" 100;
    background-color:rgb(221, 221, 228);
  }

  body {
    margin: 0;
    padding: 0;
  }

  form {
    width: 100%;
  }
  /* Add any other global CSS resets or base styles here */
`;

export default GlobalStyle;