import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
/**
 * constructor runs first
 * render runs seconds
 * componentDidMount runs third
 */
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  // app renders during the componentDidMount method

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => {
        this.setState(() => {
          return { monsters: users };
        });
      });
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <SearchBox placeholder="search monsters" className="search-box" onChangeHandler={onSearchChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
export default App;
