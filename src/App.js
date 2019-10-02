import React, { Component } from 'react';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import About from './Components/About'
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import {GlobalStyle} from './Styles/GlobalStyle';
import styled from 'styled-components';


const Appcontainer = styled.div`
  overflow-y: scroll;
`;

class App extends Component {

  state = {
    isLoading: true,
  }

  componentDidMount() {
    this.setState({isLoading : false});
  }



  render() {
    return (
      <Appcontainer>
        <GlobalStyle/>
        <Navigation/>
        <Home/>
        <About/>
        <Portfolio/>
        <Contact />
      </Appcontainer>
    );
  }
}

export default App;
