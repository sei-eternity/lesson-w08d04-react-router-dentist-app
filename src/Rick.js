import React, { Component } from 'react';
import axios from 'axios';

class Rick extends Component {
  state = {
    morty: {}
  }

  componentDidMount() {
    axios({
      method: 'GET',
      url: 'https://rickandmortyapi.com/api/character/2'
    })
      .then(response => {
        this.setState({
          morty: response.data
        })
      })
  }

  render() {
    return (
      <div>
        <img src={this.state.morty.image} alt="Morty" />
      </div >
    )
  }
}

export default Rick