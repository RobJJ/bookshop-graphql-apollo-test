import React, { useState } from "react";
//
const newBookTemplate = {
  name: "",
  author: "",
  rating: "",
};
//
function AddBook({ books, setBooks, submitBook }) {
  //
  const [newBook, setNewBook] = useState(newBookTemplate);
  //

  //
  //
  return (
    <form
      onSubmit={(e) => {
        submitBook(e);
        setNewBook(newBookTemplate);
      }}
      className="w-full bg-white flex text-center"
    >
      <div className="w-1/4">
        <input
          className="text-center w-full"
          type="text"
          placeholder="Book Name"
          id="book-name"
          name="book-name"
          value={newBook.name}
          onChange={(e) => setNewBook({ ...newBook, name: e.target.value })}
        />
      </div>
      <div className="w-1/4">
        <input
          className="text-center w-full"
          type="text"
          placeholder="Author"
          id="book-author"
          name="book-author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
      </div>
      <div className="w-1/4">
        <input
          className="text-center w-full"
          type="text"
          placeholder="Rating"
          id="book-rating"
          name="book-rating"
          value={newBook.rating}
          onChange={(e) => setNewBook({ ...newBook, rating: e.target.value })}
        />
      </div>
      <div className="w-1/4 text-green-500">
        <button type="submit">Add Book</button>
      </div>
    </form>
  );
}
//
export default AddBook;
