import React, { useEffect, useState } from "react";
//
//
function Book({ book, deleteBook, updateBook, deleteBookCompletely }) {
  console.log("Book Component called!! & Book obj is, ", book);
  //
  useEffect(() => {
    setLocalBook({ ...book });
  }, [book]);
  //
  const bookId = book.bookId;
  // const { name, author, rating } = book;
  const [isDisabled, setIsDisabled] = useState(true);
  // maybe replace the standard destructuring with this
  const [localBook, setLocalBook] = useState({ ...book });
  // const [bookStateBeforeEdit, setBookStateBeforeEdit] = useState({ ...book });
  //ghffhgfjhgffdhgddhjjfdjhgfjdngf
  function toggleDisable(e) {
    setIsDisabled(!isDisabled);
  }
  //
  function abortBookEdit() {
    console.log("Editing of book aborted!");
    setLocalBook({ ...book });
    toggleDisable();
  }
  //
  function handleBookEdit(e) {
    //
    const prop = e.target.id;
    const newBook = { ...localBook, [prop]: e.target.value };
    setLocalBook(newBook);
  }
  //
  function acceptBookEdit() {
    console.log("Book has been edited!");
    // setBookStateBeforeEdit({ ...localBook });
    // handle the http call here... call the http function with the localBook object that contains the new values to update
    updateBook(bookId, localBook);
    setIsDisabled(!isDisabled);
  }
  //
  //
  return (
    <div className="w-full flex gap-1 border border-black text-center">
      <input
        disabled={isDisabled}
        className="w-1/4"
        value={localBook.name}
        onChange={handleBookEdit}
        id="name"
        type="text"
      ></input>
      <input
        disabled={isDisabled}
        className="w-1/4"
        value={localBook.author}
        onChange={handleBookEdit}
        type="text"
        id="author"
      ></input>
      <input
        disabled={isDisabled}
        className="w-1/4"
        value={localBook.rating}
        onChange={handleBookEdit}
        type="text"
        id="rating"
      ></input>
      <div className="w-1/4 flex">
        <div
          className="w-1/2 bg-green-200"
          onClick={isDisabled ? toggleDisable : acceptBookEdit}
        >
          {isDisabled ? "Edit" : "Accept"}
        </div>
        <div
          className="w-1/2 bg-red-200 cursor-pointer"
          onClick={isDisabled ? deleteBookCompletely : abortBookEdit}
        >
          {isDisabled ? "Del" : "Cancel"}
        </div>
      </div>
    </div>
  );
}

export default Book;

// Book structure
// Book = {
//     name: "Harry Potter",
//     author: "JK Rowling",
//     rating: 4
// }
