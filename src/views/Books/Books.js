import React from 'react';
import { useEffect, useState } from 'react';
import BooksList from '../../components/Books/BooksList';
import { fetchBooks } from '../../services/books';

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const resp = await fetchBooks();
      setBooks(resp);
    };
    getBooks();
  }, []);

  return (
    <div>
      <BooksList books={books} />
    </div>
  );
}
