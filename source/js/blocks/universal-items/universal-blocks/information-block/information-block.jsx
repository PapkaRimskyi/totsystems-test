import React from 'react';

export default function InformationBlock({ information }) {
  return (
    <section className="information-block">
      <p className="information-block__information">{information}</p>
    </section>
  );
}
