import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home';
import viewArticle from './Components/viewArticle/viewArticle';


import './routes.css';

class Routes extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/viewArticle" component={viewArticle} />
        </div>
      </Router>
    );
  }
}

export default Routes;