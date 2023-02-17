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
}
//
//
//
//
module.exports = {
  getAllBooks,
  getBooksByRating,
  addNewBook,
};
