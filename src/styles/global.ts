import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: #121214;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
    transition: filter .25s;

    &:hover {
      filter: brightness(.8);
    }
  }
`