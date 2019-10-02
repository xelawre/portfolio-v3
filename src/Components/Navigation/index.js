import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import {KeyFrameNav} from '../../Styles/KeyFrames';


const LogoContainer = styled.div`
  padding: 0px 20px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-flex: center;

  h2 {
    font-size: 1.5em;
    cursor: pointer;
    transition: .4s;
    font-family: 'Marck Script', cursive;
    border: 2px solid white;
    border-radius: 50%;
    padding: 5px;

    &:hover {
      transition: .4s;
      transform: scale(1.05);
    }
  }

`;

const NavSelector = styled.div`
  border-right: 10px solid transparent;
  border-top: 10px solid transparent;
  border-bottom: 10px solid rgba(97, 10, 0,.8);
  border-left: 10px solid transparent;
  height: 10px;
  width: 10px;
  position: absolute;
  top: 50px;
  visibility: hidden;
`;

const NavBar = styled.div`
  animation: ${KeyFrameNav} .4s;
  background-color: rgba(97, 10, 0,.1);
  display: flex;
  justify-content: space-between;
  align-content: flex-start;
  height: 70px;
  width: 100%;
  position: fixed;
  font-size: 1rem;
  z-index: 10;
  transition: .4s;
  color: white;

  &:hover {
    transition: .4s;
    background: var(--background-color);
  }

  &:hover li {
    color: black;
  }

  &:hover h2 {
    color: black;
    border: 2px solid black;

  }

  ul {
    display: flex;
    padding: 0px 20px;


    li {
      list-style: none;
      font-size: 1.5em;
      cursor: pointer;

      a {
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        height: 100%;
        padding: 0 20px;
        transition: .4s;


        &:hover,:active {
          transition: .4s;
          color: rgba(97, 10, 0,.8);
        }

        &:hover ${NavSelector}  {
          visibility: visible;
          transition: .4s;
        }
      }

    }
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    padding: 15px 0;
    animation: none;
    background: var(--background-color);
    color: black;




    h2 {
      padding: 10px;
      border-color: black;
    }

    ul {

      li {

        a {
          padding: 10px;

          &:hover ${NavSelector}  {
            visibility: hidden;
          }
        }
      }
    }
  }
`;


const Navigation = props => (
  <NavBar>
    <LogoContainer>
      <h2><Link smooth to="Home">AW</Link></h2>
    </LogoContainer>
    <ul>
      <li><Link smooth to="About" >About<NavSelector/></Link>  </li>
      <li><Link smooth to="Portfolio">Portfolio<NavSelector/></Link></li>
      <li><Link smooth to="Contact">Contact<NavSelector/></Link></li>
    </ul>
  </NavBar>
);

export default Navigation;
