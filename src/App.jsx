import React, { Component } from 'react';
import './App.css';
import Table from './components/table'

class App extends Component {
  state = {
    rows: [],
    addModal: false
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
    
    fetch("https://nutsforshells-api.herokuapp.com/shells")
      .then(r => r.json())
      .then(especies => {
        this.setState({rows: especies});
      })  
  }

  render() {
    return (

        <Table datos={this.state.rows}/>    

      
    );
  }
}

export default App;

