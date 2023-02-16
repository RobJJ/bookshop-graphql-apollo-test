const books = require("./books.mongo");
//
// get all the books from the DB
async function getAllBooks() {
  return await books.find(
    {},
    {
      _id: 0,
      __v: 0,
    }
  );
}
//
//
async function getBooksByRating(minRating) {
  const allBooks = await getAllBooks();
  return allBooks.filter((book) => Number(book.rating) >= Number(minRating));
}
//
//
//
//
module.exports = {
  getAllBooks,
  getBooksByRating,
};
