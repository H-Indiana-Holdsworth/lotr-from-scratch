import React from 'react';

export default function CharactersList({ chars }) {
  return (
    <div>
      {chars.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
        </div>
      ))}
    </div>
  );
}
