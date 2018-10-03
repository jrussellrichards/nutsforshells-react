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
      .then(users => {
        this.setState({rows: users});
      })
  }

  render() {
    return (
      // <SideBar> 
        <Table datos={rows}/> 
      // </SideBar> 
      

      
    );
  }
}

export default App;

let rows = [];

const loadingPromise = fetch('/express')
  .then(response => response.json())
  .then(json => {
     rows = json
  })
