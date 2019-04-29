import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './sideBar'
import Table from './table'

class App extends Component {
  state = {
    rows: []
  }
  
  componentDidMount() {
    
    fetch("/express")
      .then(r => r.json())
      .then(especies => {
        this.setState({rows: especies});
      })  
  }

  render() {
    return (
      // <SideBar> 
        <Table datos={this.state.rows}/> 
      // </SideBar> 
      

      
    );
  }
}

export default App;

// let rows = [];

// fetch('/express')
//   .then(response => response.json())
//   .then(json => {
//      rows = json
//   })
