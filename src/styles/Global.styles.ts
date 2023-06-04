import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body,
  #root,
  .app {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    line-height: 1.5;
  }

  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0 0 4px;
    display: flex;
    justify-content: center;
  }

`;
