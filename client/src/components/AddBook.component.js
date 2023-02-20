import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_NEW_BOOK } from "../mutations/book-mutations";
import { GET_BOOKS } from "../queries/book-queries";
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
  const [addNewBook] = useMutation(ADD_NEW_BOOK, {
    variables: {
      name: newBook.name,
      author: newBook.author,
      rating: newBook.rating,
    },
    // array, can call more than one query...once the mutation is hit
    // refetchQueries: [{ query: GET_BOOKS }],
    // update func - pass in cache, use the stuff you returned
    // the {data: {addNewBook}} returns everything you returned from the actual graphql mutation declared
    update(cache, { data: { addNewBook } }) {
      const { books } = cache.readQuery({ query: GET_BOOKS });
      //
      cache.writeQuery({
        query: GET_BOOKS,
        data: {
          books: [...books, addNewBook],
        },
      });
    },
  });
  //

  //
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // submitBook(e);
        // could do validation first
        if (
          newBook.name === "" ||
          newBook.author === "" ||
          newBook.rating === ""
        ) {
          return alert("Please fill in all fields");
        }
        addNewBook();
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
