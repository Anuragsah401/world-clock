import "./App.css";

import Layout from "./Layout/Layout";
import WorldClock from "./containers/WorldClock";

import React, { Component } from "react";

export default class App extends Component {
  state = {
    backgroundColors: null,
  };

  colorChangeHandler = (colors) => {
    this.setState({ backgroundColors: colors });
  };
  render() {
    return (
      <div className="App" style={{ backgroundColor: this.state.backgroundColors }}>
        <Layout colorChangeHandler={this.colorChangeHandler}>
          <WorldClock />
        </Layout>
      </div>
    );
  }
}
