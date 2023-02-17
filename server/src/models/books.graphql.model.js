const books = require("./books.mongo");
const { v4: uuidv4 } = require("uuid");
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
async function saveBook(newbook) {
  await books.findOneAndUpdate({ name: newbook.name }, newbook, {
    upsert: true,
  });
}
//
//
async function addNewBook(name, author, rating) {
  const newBook = Object.assign(
    { name, author, rating },
    {
      inStock: true,
      bookId: uuidv4(),
    }
  );

  await saveBook(newBook);
  return newBook;
}
//
//
async function deleteBookWithId(bookId) {
  // this method return deleted obj
  const deletedBook = await books.findOneAndDelete({ bookId: bookId });
  // truthy check
  return deletedBook.bookId === bookId;
}
//
//
//
//
module.exports = {
  getAllBooks,
  getBooksByRating,
  addNewBook,
  deleteBookWithId,
  deleteBookWithId,
};
