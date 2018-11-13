import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { NavigationBar } from './components/NavigationBar'

import { games } from './legendOfZelda'
import GameDetail from './components/GameDetail'
import Search from './components/Search'

class App extends Component {
  state = {
    games: [],
    year: ""
  }

  componentDidMount() {
    this.setState({games: games})
  }

  getSearchTerms = (year) => {
    this.setState({year})
  }

  render() {
    return (
      <div className="App">
        <Router>
          <>
            <div id="Header">
              Legend of Zelda Series
            </div>
            <NavigationBar games={this.state.games} searchTerm={this.state.year}/>
            <Search getSearchTerms={this.getSearchTerms}/>
            <Switch>
              <Route path="/games/:id" render={() => {
                return <GameDetail games={this.state.games} />
              }} />
            </Switch>
          </>
        </Router>
      </div>
    );
  }
}

export default App;
