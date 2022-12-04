import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
    display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: rgba(217, 217, 217, 1);
  font-family: 'Lato', sans-serif;
  font-size: 1.15em;

}
li{
  list-style: none;
}
`;

export const theme = {
  colors: {
    primary: "#d9248f",
    warning: "#FF0000",
    text: "#174C6F",
    body: "#fff",
    cards: "rgba(255, 255, 255, 0.8)",
  },
};
