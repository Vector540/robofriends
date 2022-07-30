import React, {Component} from 'react';
import CardList from '../components/CardList';
/* import {Robots} from './Robots'; */
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';


class App extends Component {

  constructor(){
    super();
    this.state = {
      robots: [],
      searchfiels: '',
    }
  }

  OnSearch = (event) => {
    this.setState({searchfiels: event.target.value})
    /* console.log(filteredRobots); */
    console.log(this.state.filtBots);
    console.log(event.target.value)
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({robots: users}));
  }

  render(){
    const {robots, searchfiels} = this.state;
    const filtBots = robots.filter(x =>{
      return x.name.toLowerCase().includes(searchfiels.toLowerCase())
    })
    return !robots.length ? 
      <h1 className='tc'>Loading</h1> :
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.OnSearch}/>
          <Scroll>
            <CardList robots={filtBots}/>
          </Scroll>
        </div>
  }
}

export default App;