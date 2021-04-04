import "./App.scss";
import Header from "./Component/Header/Header";
import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Upload from "./Pages/Upload/Upload";
import Home from "./Pages/Home";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/upload" component={Upload} />
          <Route path="/videos/:id" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
