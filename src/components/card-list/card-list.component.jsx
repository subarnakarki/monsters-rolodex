import { Component } from 'react';

class CardList extends Component {
  render() {
    console.log('render from card list');
    console.log(this.props);
    const { monsters } = this.props;
    return monsters.map((monster, i) => {
      return (
        <div key={monster.id}>
          <h1 key={i}> {monster.name}</h1>
        </div>
      );
    });
  }
}

export default CardList;
