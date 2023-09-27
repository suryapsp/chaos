import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 6;

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({progress})
  }

  render() {
    return (
      <div>
        <Router>
          <LoadingBar color="#f11946" 
          height={4}
          progress={this.state.progress}
          />
          <Navbar />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <News setProgress={this.setProgress} 
                  pageSize={this.pageSize}
                  key={"general"}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News setProgress={this.setProgress} 
                  pageSize={this.pageSize}
                  key={"general"}
                  country="in"
                  category="general"
                />
              }
            />

            <Route
              exact
              path="/business"
              element={
                <News setProgress={this.setProgress} 
                  pageSize={this.pageSize}
                  key={"business"}
                  country="in"
                  category="business"
                />
              }
            />

            <Route
              exact
              path="/health"
              element={
                <News setProgress={this.setProgress} 
                  pageSize={this.pageSize}
                  key={"health"}
                  country="in"
                  category="health"
                />
              }
            />

            <Route
              exact
              path="/technology"
              element={
                <News setProgress={this.setProgress} 
                  pageSize={this.pageSize}
                  key={"technology"}
                  country="in"
                  category="technology"
                />
              }
            />

            <Route
              exact
              path="/sports"
              element={
                <News setProgress={this.setProgress} 
                  pageSize={this.pageSize}
                  key={"sports"}
                  country="in"
                  category="sports"
                />
              }
            />

            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress={this.setProgress} 
                  pageSize={this.pageSize}
                  key={"entertainment"}
                  country="in"
                  category="entertainment"
                />
              }
            />

            <Route
              exact
              path="/science"
              element={
                <News setProgress={this.setProgress} 
                  pageSize={this.pageSize}
                  key={"science"}
                  country="in"
                  category="science"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
