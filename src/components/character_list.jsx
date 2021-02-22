import React from 'react';
import Character from './character';

const CharacterList = (props) => {
  console.log(props.charInfo.next);
  const renderList = () => {
    return props.characters.map((character, index) => {
      return (
        <Character
          character={character}
          key={index}
        />
      );
    });
  };
  

  return (
    <div className="character-list">
      {renderList()}
      <button>Load More</button>
    </div>
  );
};

export default CharacterList;


