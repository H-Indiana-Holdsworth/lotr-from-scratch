import React from 'react';

export default function Controls({ race, setRace, query, setQuery }) {
  return (
    <div>
      <div>
        <select value={race} onChange={(e) => setRace(e.target.value)}>
          <option value="All">All</option>
          <option value="Dwarf">Dwarf</option>
          <option value="Elf">Elf</option>
          <option value="Hobbit">Hobbit</option>
          <option value="Human">Human</option>
          <option value="Maiar">Maiar</option>
          <option value="Orc">Orc</option>
        </select>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search characters"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
}
