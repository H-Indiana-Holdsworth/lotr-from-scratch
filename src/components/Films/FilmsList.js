import React from 'react';

export default function FilmsList({ films }) {
  return (
    <section className="films">
      {films.map((film) => (
        <div
          className="film"
          key={film.id}
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/films/${film.title}.jpeg` }}
        >
          <div className="content">
            <h1>{film.title}</h1>
          </div>
        </div>
      ))}
    </section>
  );
}
