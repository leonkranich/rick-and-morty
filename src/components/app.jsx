import React, { Component } from 'react';
import CharacterList from './character_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      characters: [],
      charInfo: []
     }
  }

  componentDidMount() {
    this.Characters();
  }

  Characters() {
    const apiEndpoint = `https://rickandmortyapi.com/api/character`
    fetch(apiEndpoint).then(response => response.json()).then((data) => {
      this.setState({
        characters: data.results,
        charInfo: data.info
      })
    })
  }

  render() { 
    return ( 
      <div>
        <CharacterList characters={this.state.characters} charInfo={this.state.charInfo}/>
      </div>
     );
  }
}
 
export default App;