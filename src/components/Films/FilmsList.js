import React from 'react';

export default function FilmsList({ films }) {
  return (
    <section className="films">
      {films.map((film) => (
        <div className="film" key={film.id}>
          <div className="content">
            <h1>{film.title}</h1>
          </div>
        </div>
      ))}
    </section>
  );
}
