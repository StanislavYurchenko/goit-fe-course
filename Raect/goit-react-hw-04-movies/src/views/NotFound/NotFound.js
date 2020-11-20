import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section>
      <h2> page not found </h2>
      <p>
        <Link>link</Link>
        to main screen
      </p>
    </section>
  );
}

export default NotFound;
