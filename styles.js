import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root {
    --color-h1: #801100ff ;
    --color-h2: #7d4140ff ;
    --color-primary: #801100ff ;
    --color-secondary: #dbd7d7ff;
    --color-button: #edd9a1d6 ;
    --color-background: #f9f9f9;
    --color-deletebutton: #ff1515d6 ;
    --color-deletebutton2: #801100ff ;
    --color-addbutton: #0db20a92 ;
    --color-addbutton2: #15361b ;
    --color-slider: #3b3939;
    --color-input: #ccc ;
    --color-input2: #333 ;
    --color-black: #000000;
    --color-filter: #afabab92 ;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    background-color: #dadaef;
  }
  button {
    width: 100px;
  }
`;