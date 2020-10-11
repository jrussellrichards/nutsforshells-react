import React, { Component } from "react";
import "./App.css";
import Table from "./components/table";
import rest from "./rest";
class App extends Component {
  state = {
    rows: [],
    addModal: false,
  };

  handleOpen = () => {
    this.setState({
      addModal: true,
    });
  };

  handleClose = () => {
    this.setState({
      addModal: false,
    });
  };

  componentDidMount() {
    rest.getShells().then((data) => this.setState({ rows: data.data }));
  }

  render() {
    return <Table datos={this.state.rows} />;
  }
}

export default App;
