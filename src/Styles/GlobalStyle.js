import { createGlobalStyle } from "styled-components"
import styled from "styled-components"




const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Lato");
  @import url("fonts.googleapis.com/css?family=Marck+Script&display=swap");

    :root {
    --background-color: #efe6e5;
    --text-color: #c2b0a2;
    --button-text-color: #fff;
    --main-button-color: #c2b0a2;
  }

  body {
    font-family: 'Lato', sans-serif;
    background: var(--background-color);
    margin: 0;
    padding: 0;
    font-size: 18px;
    scroll-behavior: smooth;
    @media (max-width: 1250px) {
      font-size: 20px;
    }


  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  *:focus {
    outline: none;
  }

  a {
    text-decoration: none;
  }
`

const Wrapper = styled.div`
  min-height: ${props => props.height};
  padding: ${props => props.padding};
  display: flex;
  flex-direction: column;
  justify-flex: center;
  align-content: center;
  align-items: center;
  @media (max-width: 768px) {
    padding: 0;

  }

`;

const CoverImage = styled.div`
border-left: none;
border-right: none;
  background-image: url(${props => props.img});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
`;


const Button = styled.a`

  background-color: transparent;
  border: 5px solid #f4f1ef;
  color: #f4f1ef;
  font-size: 1.5em;
  padding: .8em 3em;
  margin: 1em 0;
  display: inline-block;
  cursor: pointer;
  transition: .4s;
  border-radius: 5px;
  &:hover {
    transition: .4s;
    transform: scale(1.05);
    color: rgba(97, 10, 0,.8);
    background-color: var(--background-color);

  }

`;

export {GlobalStyle, Wrapper, Button};
