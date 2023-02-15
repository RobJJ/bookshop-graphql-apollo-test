// CommonJS syntax import
const { v4: uuidv4 } = require("uuid");

// The object model that mongoose created using the schema
const books = require("./books.mongo");

//
//
async function saveBook(book) {
  // Condition for if book already exists... boolean
  // const book = await books.findOne({
  //     name: book.name,
  // })

  // if(book) {
  //     throw new Error("Book already exists!")
  // }

  await books.findOneAndUpdate({ name: book.name }, book, { upsert: true });
}
//
async function addNewBook(book) {
  // Can add some props to the object if you would like before saving. Lets add a inStock prop
  const newBook = Object.assign(book, {
    inStock: true,
    bookId: uuidv4(),
  });

  await saveBook(newBook);
}
//
//
//
async function existsBookWithId(bookId) {
  return await books.findOne({
    bookId: bookId,
  });
}
//
async function deleteBookWithId(bookId) {
  // not going to delete but rather update so that stock is false
  const deletedBook = await books.updateOne(
    { bookId: bookId },
    { inStock: false }
  );
  // return meta data from mongoose
  return deletedBook.modifiedCount === 1;
}
//
async function deleteBookCompletelyWithId(bookId) {
  const deletedBook = await books.findOneAndDelete({ bookId: bookId });

  // findOneAndDelete returns the object that was deleted
  // based your conditional check on this info.. eg below.
  return deletedBook.bookId === bookId;
}
//
//
//
async function getAllBooks() {
  // find planets, 2nd param to excl these 1=yes, 0=no
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
//
async function updateBookWithId(bookId, book) {
  const updatedBook = await books.updateOne({ bookId: bookId }, { $set: book });
  // return meta data from mongoose
  return updatedBook.modifiedCount === 1;
}
//
module.exports = {
  addNewBook,
  existsBookWithId,
  deleteBookWithId,
  getAllBooks,
  updateBookWithId,
  deleteBookCompletelyWithId,
};
