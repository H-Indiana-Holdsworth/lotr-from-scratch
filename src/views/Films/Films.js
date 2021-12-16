import React from 'react';
import { useEffect, useState } from 'react';
import { fetchFilms } from '../../services/films';
import FilmsList from '../../components/Films/FilmsList';

export default function Films() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const getFilms = async () => {
      const resp = await fetchFilms();
      setFilms(resp);
    };
    getFilms();
  }, []);

  return (
    <div>
      <FilmsList films={films} />
    </div>
  );
}
