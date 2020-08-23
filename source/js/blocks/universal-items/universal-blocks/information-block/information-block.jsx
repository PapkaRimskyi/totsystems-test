import React from 'react';
import PropTypes from 'prop-types';

export default function InformationBlock({ information }) {
  return (
    <section className="information-block">
      <p className="information-block__information">{information}</p>
    </section>
  );
}

InformationBlock.propTypes = {
  information: PropTypes.string.isRequired,
};
