import React, { Component } from "react";
import "./App.css";
import { people } from "./people";
import MainList from "./MainList";

class App extends Component {
  constructor() {
    console.log("constructor invoked");
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount(){
    console.log("CDM invoked");
    this.setState({ friends: people });
  }

  render() {
    console.log("render invoked");
    return (
      <div className="App">
        <h1> Welcome to Friends! </h1>
        <MainList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
