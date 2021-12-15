import React from 'react';
import { useEffect, useState } from 'react';
import { fetchCharacters } from '../../services/characters';
import CharactersList from '../../components/Characters/CharactersList';

export default function Characters() {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    const getChars = async () => {
      const resp = await fetchCharacters('All');
      setChars(resp);
    };
    getChars();
  }, []);

  return (
    <div>
      <CharactersList chars={chars} />
    </div>
  );
}
