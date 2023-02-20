import React from "react";
import Book from "./Book.component";
import { gql, useQuery } from "@apollo/client";
//
import { GET_BOOKS } from "../queries/book-queries";

//

//
const BookList = () => {
  // use this useQuery hook and pass in the query
  const { loading, error, data } = useQuery(GET_BOOKS);
  //
  // can load a spinner here if you want
  if (loading) return <div>Loading...</div>;
  // handle your error here
  if (error) return <div>Something went wrong!</div>;
  console.log("BookList Component called!!, DATA is: ", data);
  //
  return (
    <div className="flex flex-col w-full p-2 gap-2">
      {data.books
        .filter((book) => book.inStock)
        .map((book, idx) => {
          return <Book key={book.bookId} book={book} />;
        })}
    </div>
  );
};

export default BookList;
