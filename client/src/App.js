import React, { useState } from "react";

import AddBook from "./components/AddBook.component";
//
import useBooks from "./hooks/useBooks";
import BookList from "./components/BookList.component";
//
const testingBookList = [
  { name: "Arry Pooper", author: "JK Bowl", rating: "5", inStock: true },
  { name: "Block Boys", author: "RJ Slice", rating: "4", inStock: true },
  { name: "McPooper", author: "MaiPoops", rating: "2", inStock: true },
];
//
function App() {
  //
  // const [testingBooks, setTestingBooks] = useState(testingBookList);

  const { submitBook, books, deleteBook, updateBook, deleteBookCompletely } =
    useBooks();
  //
  //
  return (
    <div className="w-screen h-screen p-10">
      <div className="bg-blue-200 h-full w-full rounded-xl p-5 text-xl flex flex-col gap-2">
        <AddBook submitBook={submitBook} />
        <section className="w-full bg-white flex flex-col">
          <div className="w-full text-2xl underline text-center">Book List</div>
          <BookList
            books={books}
            deleteBookCompletely={deleteBookCompletely}
            deleteBook={deleteBook}
            updateBook={updateBook}
          />
        </section>
      </div>
    </div>
  );
}

export default App;

// TODO
//
// For every book in the bookList Database, we render a book and display it
//
