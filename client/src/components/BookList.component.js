import React from "react";
import Book from "./Book.component";
//
//
const BookList = ({ books, deleteBook, updateBook, deleteBookCompletely }) => {
  console.log("BookList Component called!!");
  //
  return (
    <div className="flex flex-col w-full p-2 gap-2">
      {books
        .filter((book) => book.inStock)
        .map((book, idx) => {
          return (
            <Book
              key={idx}
              book={book}
              deleteBookCompletely={() => deleteBookCompletely(book.bookId)}
              deleteBook={() => deleteBook(book.bookId)}
              updateBook={updateBook}
            />
          );
        })}
    </div>
  );
};

export default BookList;
