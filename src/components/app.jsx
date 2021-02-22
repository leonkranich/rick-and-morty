import React, { Component } from 'react';
import CharacterList from './character_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      characters: []
     }
  }

  componentDidMount() {
    this.allCharacters();
  }

  allCharacters() {
    const apiEndpoint = `https://rickandmortyapi.com/api/character`
    fetch(apiEndpoint).then(response => response.json()).then((data) => {
      console.log(data.results);
      this.setState({
        characters: data.results
      })
    })
  }

  render() { 
    return ( 
      <div>
        <CharacterList characters={this.state.characters} />
      </div>
     );
  }
}
 
export default App;