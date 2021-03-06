import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Character from './Character';

const Characters = ({ characters }) => {
  const characterElements = characters.map(character => (
    <li key={character.id}>
      <Link to={`/${character.id}`}>
        <Character {...character} />
      </Link>
    </li>
  ));

  return (
    // eslint-disable-next-line no-undef
    <ul className={styles.Characters}>
      {characterElements}
    </ul>
  );
};

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string
  })).isRequired
};

export default Characters;
