import { Component } from 'react';
import './App.css';

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
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        );
      });
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    return { searchField };
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input className="searchbox" type="search" placeholder="search monsters" onChange={onSearchChange} />
        {filteredMonsters.map((monster, i) => {
          return (
            <div key={monster.id}>
              <h1 key={i}> {monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}
export default App;
