const booksModel = require("../models/books.graphql.model");
//
//
module.exports = {
  Query: {
    books: () => {
      return booksModel.getAllBooks();
    },
    booksByRating: () => {
      //
    },
  },
};
