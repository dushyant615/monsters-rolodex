import React , { Component } from 'react';
import { CardList, SearchBox } from './components';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField: null
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())    //converting response to json format
    .then(users => this.setState({ monsters: users}))
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render(){
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return searchField ?
      monster.name.toLowerCase().includes(searchField.toLowerCase()) : true;
    })
    
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          type= 'search'
          placeholder= 'search monsters'
          handleChange= { this.handleChange }
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}
export default App; 
