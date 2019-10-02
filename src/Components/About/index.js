import React from 'react';
import {Wrapper, RazorDiv} from '../../Styles/GlobalStyle';
import styled from 'styled-components';
import picture from '../../Assets/picture1.jpg';

const AboutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  z-index: 3;
  padding: 3em 5em;
  background-color: #f4f1ef;
  border-radius: 5px;
  box-shadow: 1px 2px 4px #d9c3c1;


  p {
    padding: 1.5em 10em;
    line-height: 1.5;
    text-align: center;
    font-size: 1.2em;
    color: black;
  }

  p:nth-child(3) {
    padding: 0em 10em;
    font-weight: bold;
  }

  p:nth-child(4) {
    padding: 1em 10em 0em;
  }

  @media (max-width: 768px) {
    padding: 1.5em 0em;
    box-shadow: none;
    border-radius: 0;

    p {
      padding: 1.5em 1em;
      font-size: 1em;
      text-align: justify;

    }

    p:nth-child(3) {
      padding: 0em 1em;
    }

    p:nth-child(4) {
      padding: 1.5em 1em 0em;
    }
  }

`;

 const ProfileContainer = styled.div`
    background: url("${picture}");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 7em 7em;
    border-radius: 50%;



    h2 {
      font-size: 2.5em;
      position: relative;
      color: #fff;
    }

      @media (max-width: 768px) {
        padding: 5em 5em;

      }
 `;


const About = props => (
  <Wrapper padding={"2em"} height={"70vh"} name="About">
      <AboutContainer>
          <ProfileContainer> </ProfileContainer>
          <p>
            My name is Axel Wredlert and I am in my final year to become a front end developer at KYH.
            I'm very passionate about web development and I'm always working on a project or planning a new website idea.
          </p>
          <p>
            Skills: React, JavaScript( Vanilla, TypeScript), HTML & CSS.
          </p>
          <p>
            Another great passion of mine are wrist watches.
            I've been a collector since 2014 when I bought my first mechanical watch.
          </p>
      </AboutContainer>


  </Wrapper>
);

export default About;
