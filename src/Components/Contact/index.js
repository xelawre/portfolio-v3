import React from 'react';
import {Wrapper, RazorDiv} from '../../Styles/GlobalStyle';
import styled from 'styled-components';
import {MyMail} from '../../Styles/Icons';



const ContactWrapper = styled.div`
  width: 100%;
  background: #f4f1ef;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 1px 2px 4px #d9c3c1;
  padding: 2em 4em;


  h2 {
    padding: .5em 0 1em;
    font-size: 2em;
    position: relative;
    color: black;

    span {
      position: absolute;
      width: 50%;
      height: 5px;
      bottom: 20px;
      left: 25%;
      text-align: center;
      font-size: 1.2em;
      background-color: rgba(97, 10, 0,.6);
    }
  }
  @media (max-width: 768px) {
    padding: 3em 0;

    h2 {
      font-size: 1.5em;
    }
  }

`;


const Contact = props => (
  <Wrapper padding={"2em"} height={"35vh"} name="Contact">
    <ContactWrapper>
      <MyMail color={"rgba(97, 10, 0,.6)"} width={"4em"}/>
      <h2>axelwredlert@gmail.com <span></span></h2>
      <p>© axelwredlert.com - 2019</p>
    </ContactWrapper>
  </Wrapper>
);

export default Contact;
