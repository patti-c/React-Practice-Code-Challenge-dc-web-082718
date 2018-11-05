import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor() {
    super()
    this.state = {
      allSushi: [],
      platedSushi: [null, null, null, null],
      eatenSushi: [],
      sushiWallet: 100
    }
  }

  componentDidMount() {
    this.fetchAllSushi().then(this.establishState)
  }

  establishState = (data) => {
    this.setAllSushiState(data)
    this.fillSushiBar()
  }

  setAllSushiState = (sushiData) => {
    this.setState({
      allSushi: sushiData
    })
  }

  fillSushiBar = () => {

    let newPlates = this.state.platedSushi
    let newAllSushi = this.state.allSushi

    this.state.platedSushi.map(function(plate, index) {
      if(plate === null) {
        newPlates[index] = newAllSushi.shift()
      }
    })

    this.setState({
      allSushi: newAllSushi,
      platedSushi: newPlates.flat()
    })

  }

  fetchAllSushi() {
    return fetch(API).then(res => res.json())
  }

  eatSushi = (e) => {

    let newEatenSushi = this.state.eatenSushi
    let platedSushi = this.state.platedSushi
    let newWallet = this.state.sushiWallet

    let newPlatedSushi = platedSushi.map(function(sushi, index) {
      if(sushi && (sushi.id == e.currentTarget.id) && (sushi.price < newWallet)) {
        newEatenSushi.push(sushi)
        newWallet = newWallet - sushi.price
        return null
      } else {
        return sushi
      }
    })

    this.setState({
      platedSushi: newPlatedSushi,
      eatenSushi: newEatenSushi,
      sushiWallet: newWallet
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushi={this.state.platedSushi}
          eatSushi={this.eatSushi}
          fillBar={this.fillSushiBar}
        />
        <Table wallet={this.state.sushiWallet} sushi={this.state.eatenSushi}/>
      </div>
    );
  }
}

export default App;
