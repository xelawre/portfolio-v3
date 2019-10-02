import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import {Wrapper, CoverImage} from '../../Styles/GlobalStyle';
import {KeyFrameHomeTxt} from '../../Styles/KeyFrames';


const HomeWrapper = styled.div`
  font-size: 1rem;
  font-family: "Arial","Helvetica","Roboto",sans-serif;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: flex-start;
  background: radial-gradient(rgba(108, 9, 2,.3),rgba(127, 13, 0,.4),rgba(97, 10, 0,.8));
  padding-top: 60px;



  div {
    padding: 4em;
    animation: ${KeyFrameHomeTxt} .4s;

    h1 {
      font-weight: 100;
      font-size: 4em;
      color: #f4f1ef;

      span {
        font-size: 1.1em;
        font-weight: bold;
      }
    }
    a {
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
    }
  }

    @media (max-width: 768px) {
      flex-direction: column;
      align-content: center;
      align-items: center;
      justify-content: center;
      padding-top: 12em;
      padding-bottom: 2em;


      div {
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        justify-content: center;
        padding: 0;

        h1 {
          text-align: center;
          font-size: 2.5em;
        }

        a {
          padding: .5em 1em;
        }
      }
    }
`;

const HomeCover = styled.div`
  background-image: url(${props => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
`;

const Home = props => (
  <Wrapper top height={"50vh"} name="Home">
    <HomeCover img={"https://cdn.pixabay.com/photo/2016/09/08/10/20/architecture-1653776_1280.jpg"}>
      <HomeWrapper>
        <div>
          <h1><span>Axel Wredlert<br/>Portfolio</span></h1>
          <Link smooth to="Portfolio">My projects</Link>
        </div>
      </HomeWrapper>
    </HomeCover>
  </Wrapper>
);

export default Home;
