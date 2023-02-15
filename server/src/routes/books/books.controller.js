const {
  addNewBook,
  existsBookWithId,
  deleteBookWithId,
  deleteBookCompletelyWithId,
  updateBookWithId,
  getAllBooks,
} = require("../../models/books.model");
//
//
//
async function httpAddNewBook(req, res) {
  const book = req.body;
  // console.log("(books.controller)request... book: ", book);
  // conditions
  if (!book.name || !book.author || !book.rating) {
    return res.status(400).json({
      error: "Missing required book properties!",
    });
  }
  // If all is well...
  await addNewBook(book);
  return res.status(201).json(book);
}

async function httpDeleteBook(req, res) {
  //
  const bookId = req.query.id;
  // Check: if book does not exist
  const bookExists = await existsBookWithId(bookId);
  if (!bookExists) {
    return res.status(404).json({
      error: "Book not found!",
    });
  }
  // if book does exist
  const deletedBook = await deleteBookWithId(bookId);
  if (!deletedBook) {
    return res.status(400).json({
      error: "Book not deleted!",
    });
  }
  // return meta data here
  return res.status(200).json({
    ok: true,
  });
}

async function httpGetAllBooks(req, res) {
  return res.status(200).json(await getAllBooks());
}

async function httpUpdateBook(req, res) {
  const bookId = req.query.id;
  const book = req.body;
  //
  const bookExists = await existsBookWithId(bookId);
  if (!bookExists) {
    return res.status(404).json({
      error: "Book not found!",
    });
  }
  //
  const updatedBook = await updateBookWithId(bookId, book);
  if (!updatedBook) {
    return res.status(400).json({
      error: "Book not updated!",
    });
  }
  return res.status(200).json({
    ok: true,
  });
}

async function httpDeleteBookCompetely(req, res) {
  const bookId = req.query.id;
  const bookExists = await existsBookWithId(bookId);
  if (!bookExists) {
    return res.status(404).json({
      error: "Book not found!",
    });
  }
  const deletedBook = await deleteBookCompletelyWithId(bookId);
  if (!deletedBook) {
    return res.status(400).json({
      error: "Book not deleted!",
    });
  }
  // return meta data here
  return res.status(200).json({
    ok: true,
  });
}

module.exports = {
  httpAddNewBook,
  httpDeleteBook,
  httpGetAllBooks,
  httpUpdateBook,
  httpDeleteBookCompetely,
};
