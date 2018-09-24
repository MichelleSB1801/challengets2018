import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import './Home.css';

class Home extends Component {

  render() {
    const url = "/viewArticle"

    return (
      <div className = 'homeBG'>
        <span className = 'homeTitle'>Hola, bienvenid@ a tu artículo de la Nasa</span>
        <Link to = {url}>  
          <div className = 'button'>GO!</div>
        </Link>
      </div>
    );
  }
}

export default Home;
