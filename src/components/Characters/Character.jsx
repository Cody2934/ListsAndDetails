import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ image, name, description }) => (
  // eslint-disable-next-line no-undef
  <section className={styles.Character}>
    <img src={image} alt={name} />
    <h3>{name}</h3>
    <p>{description}</p>
  </section>
);

Character.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default Character;
