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
      <SideBar> 
        <Table datos={rows}/> 
      </SideBar> 
      

      
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
  // let id = 0;
// function createData(familia, genero, especie, calidad, tamaño, pais, comentario, precio) {
//   id += 1;
//   return { id, familia, genero, especie, calidad, tamaño, pais, comentario, precio };
// }

// const rows = [
//   createData('Frozen yoghurt', "s", 6.0, 24, 4.0, 12, 12, 12, 12),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 12, 12, 12, 12),
//   createData('Eclair', 262, 16.0, 24, 6.0, 12, 12, 12, 12),
//   createData('Cupcake', 305, 3.7, 67, 4.3, 12, 12, 12, 12),
//   createData('Gingerbread', 356, 16.0, 49, 3.9, 12, 12, 12, 12),
// ];

