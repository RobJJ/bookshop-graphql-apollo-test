import React, { useState } from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

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
// to help with caching
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        books: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});
// pass this created var to the provider
const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  // cache: new InMemoryCache(),
  cache: cache,
});
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
      <ApolloProvider client={client}>
        <div className="bg-blue-200 h-full w-full rounded-xl p-5 text-xl flex flex-col gap-2">
          <AddBook />
          <section className="w-full bg-white flex flex-col">
            <div className="w-full text-2xl underline text-center text-blue-400">
              Book List
            </div>
            <BookList />
          </section>
        </div>
      </ApolloProvider>
    </div>
  );
}

export default App;

// TODO
//
// For every book in the bookList Database, we render a book and display it
//
