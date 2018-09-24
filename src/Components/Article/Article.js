import React, { Component } from 'react';

import './Article.css';

class Article extends Component {
    constructor(props) {
        super(props)
    }
  render() {
    const props = this.props.info.data
    const render = this.props.info.render;
    console.log(props.title, 'hola soy los props')

    return (
      <div className= 'artContainer'>
        <span className = 'artTitle'>{render ? props.title : ''}</span>
        <span className = 'artDate'>{render ? props.date : ''}</span>
        <div className = 'subCont'>
          <div className = 'imgDesc'>
            <img className = 'artImg' src={render ? props.url : ''}/>
            <span className = 'artCr'>Image credits: {render ? props.copyright : ''}</span>
          </div>
          <p className = 'artExp'>{render ? props.explanation: ''}</p>
        </div>
      </div>
    );
  }
}

export default Article;
