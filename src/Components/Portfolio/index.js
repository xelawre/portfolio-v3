import React from 'react';
import {Wrapper, Button} from '../../Styles/GlobalStyle';
import styled from 'styled-components';
import port from '../../Assets/port.jpg';
import axelwredlert from '../../Assets/axelwredlert.png';
import aquarius from '../../Assets/aquarius.png';
import qlok from '../../Assets/qlok.png';
import {Git} from '../../Styles/Icons';
import { Link } from 'react-scroll';





const PortfolioWrapper = styled.div`
border-left: none;
border-right: none;
  background-image: url("https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198_1280.jpg");
  background-attachment: fixed;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 80vh;
`;

const PortfolioCover = styled.div`
  width: 100%;
  padding: 3em 2em;
  background:  radial-gradient(rgba(108, 9, 2,.3),rgba(127, 13, 0,.4),rgba(97, 10, 0,.9));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;

  h2 {
    padding: .5em 0 1em;
    font-size: 2.5em;
    position: relative;
    color: #f4f1ef;

    span {
      position: absolute;
      width: 80%;
      height: 5px;
      bottom: 20px;
      left: 25px;
      text-align: center;
      font-size: 1.2em;
      background-color: #f4f1ef;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5em 0;
  }
`;

const ProjektWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  padding: 3em 0;
`;

const Project = styled.div`
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 380px;
  height: 300px;
  transition: .4s;
  border-radius: 5px;
  margin: .5em;

  &:hover a {
    transition: .4s;
    opacity: 1;
  }

  a {
    transition: .4s;
    opacity: 0;
    font-size: 1.2em;
    color: rgba(97, 10, 0,.8);
    background-color: var(--background-color);

   &:hover {
     transform: scale(1);
   }
  }
`;

const Portfolio = props => (
  <PortfolioWrapper name="Portfolio">
      <PortfolioCover>
        <h2>My projects<span></span></h2>
        <ProjektWrapper>
          <Project img={axelwredlert}><Button href="https://github.com/xelawre/portfolio" target="_blank"> Portfolio 1.0</Button></Project>
          <Project img={aquarius}><Button href="https://github.com/danielrydh/aquarius" target="_blank">Aquarius</Button></Project>
          <Project img={qlok}><Button href="https://github.com/Eddyking1/Qlok" target="_blank">Qlok</Button></Project>
        </ProjektWrapper>

        <Button href="https://github.com/xelawre" target="_blank">My GitHub</Button>
      </PortfolioCover>
  </PortfolioWrapper>
);

export default Portfolio;
