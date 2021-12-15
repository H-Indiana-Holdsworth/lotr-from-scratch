import React from 'react';

export default function BooksList({ books }) {
  return (
    <div>
      {books.map((item) => (
        <h2 key={item.id}>{item.title}</h2>
      ))}
    </div>
  );
}
