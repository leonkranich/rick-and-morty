import React, { Component } from 'react';

class Character extends Component {
  render() { 
    return ( 
      <div>
        <img className="avatar" src={this.props.character.image} alt="character img" />
        {this.props.character.name}
      </div>
     );
  }
}
 
export default Character;