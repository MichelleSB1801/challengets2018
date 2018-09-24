import React, { Component } from 'react';
import Article from '../Article/Article';


import './viewArticle.css';

class ViewArticle extends Component {
    constructor(props) {
        super(props)
        this.state = {
          data: {},
          render: false
      }
    }
    
    async componentDidMount () {
      const data = await fetch('https://api.nasa.gov/planetary/apod?api_key=MmSynY0I4ZVDXYkUYjKwYW4ThK8aeVPTYcKz5HCN')
      const datajson = await data.json()
      console.log(datajson, 'viewArt')
      this.setState({
        data: datajson,
        render: true
      })
    }

    render() {
    const infoArt = this.state;
    return (
      <div>
        <Article info={infoArt} />
      </div>
    );
  }
}

export default ViewArticle;
