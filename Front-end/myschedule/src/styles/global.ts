import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle `
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
button{
    cursor: pointer;
    border: none;
    background: transparent;
}
ul, ol, li{
    list-style: none;
}
img{
    max-width: 100%;
}
input, select{
    background: transparent;
    border: none;
}

textarea:focus, input:focus{
    outline: none;
}

/* Hide scrollbar for Chrome, Safari and Opera */
*::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
* {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}

@-webkit-keyframes scale-up-center {
    0% {
      -webkit-transform: scale(0.5);
              transform: scale(0.5);
    }
    100% {
      -webkit-transform: scale(1);
              transform: scale(1);
    }
  }
  @keyframes scale-up-center {
    0% {
      -webkit-transform: scale(0.5);
              transform: scale(0.5);
    }
    100% {
      -webkit-transform: scale(1);
              transform: scale(1);
    }
  }

:root{
    --black: #000000;
    --gray-5: #292929;
    --gray-4: #4e4e4e;
    --gray-3: #777777;
    --gray-2: #a2a2a2;
    --gray-1: #d0d0d0;
    --white: #ffffff;
}
`