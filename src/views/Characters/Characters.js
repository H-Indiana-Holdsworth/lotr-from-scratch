import React from 'react';
import { useEffect, useState } from 'react';
import { fetchCharacters } from '../../services/characters';
import CharactersList from '../../components/Characters/CharactersList';
import Controls from '../../components/Characters/Controls';

export default function Characters() {
  const [chars, setChars] = useState([]);
  const [race, setRace] = useState('All');
  const [query, setQuery] = useState('');

  useEffect(() => {
    const getChars = async () => {
      const resp = await fetchCharacters(race);
      setChars(resp);
    };
    getChars();
  }, [race]);

  async function getQuery() {
    const resp = await fetchCharacters(race, query);
    setChars(resp);
    setQuery('');
  }

  return (
    <div>
      <Controls
        race={race}
        setRace={setRace}
        query={query}
        setQuery={setQuery}
        getQuery={getQuery}
      />
      <CharactersList chars={chars} setChars={setChars} />
    </div>
  );
}
