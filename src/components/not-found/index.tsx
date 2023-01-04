import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="page_404">
      <h1>404</h1>
      <p>Oops! Something is wrong.</p>
      <Link className="button" to="/">
        Go back in initial page, is better.
      </Link>
    </section>
  );
}

export default NotFound;
