import React, { Component } from "react";
import "./App.css";
import Table from "./components/table";
import rest from "./rest";



class App extends Component {
  state = {
    rows: [],
    addModal: false,
  };




  componentDidMount() {
    rest.getShells().then((data) => this.setState({ rows: data.data }));
  }

  onLoadData = () =>{

    rest.getShells().then((data) => this.setState({ rows: data.data }));
  
  }



  render() {
    return <Table datos={this.state.rows} onLoadData={this.onLoadData}/>;
  }
}

export default App;
