import React from 'react';
import Character from './character';

const CharacterList = (props) => {
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
    </div>
  );
};

export default CharacterList;

