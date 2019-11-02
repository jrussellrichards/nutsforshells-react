import React, { Component } from 'react';
import './App.css';
import Table from './table'
import AddShellModal from './AddShellModal'

class App extends Component {
  state = {
    rows: [],
    addModal: true


  }
  
   handleOpen = () => {
    this.setState({
      addModal:true
    }
    );
  };

  handleClose = () => {
    this.setState({
      addModal:false
    }
    );
  };

  componentDidMount() {
    
    fetch("/express")
      .then(r => r.json())
      .then(especies => {
        this.setState({rows: especies});
      })  
  }

  render() {
    return (
      <div>
        <Table datos={this.state.rows}/>    
        <AddShellModal /> 
     </div>
      
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