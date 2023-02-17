const booksModel = require("../models/books.graphql.model");
//
//
module.exports = {
  Query: {
    books: () => {
      return booksModel.getAllBooks();
    },
    booksByRating: (_, args) => {
      return booksModel.getBooksByRating(args.minRating);
    },
  },
  Mutation: {
    addNewBook: (parent, args) => {
      return booksModel.addNewBook(args.name, args.author, args.rating);
    },
  },
};
