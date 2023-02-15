// const API_URL = "/v1";

// handles frontend request
async function httpSubmitNewBook(book) {
  // going to remove ${API_URL} before /books
  try {
    return await fetch(`/v1/books`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    });
  } catch (error) {
    return {
      ok: false,
    };
  }
}

async function httpDeleteBook(id) {
  try {
    return await fetch(`/v1/books/?id=${id}`, {
      method: "delete",
    });
  } catch (error) {
    return {
      ok: false,
    };
  }
}

async function httpGetBooks() {
  const response = await fetch(`/v1/books`, {
    method: "get",
  });
  return await response.json();
}

async function httpUpdateBook(id, updatedBook) {
  try {
    return await fetch(`/v1/books/?id=${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBook),
    });
  } catch (error) {
    return {
      ok: false,
    };
  }
}

async function httpDeleteBookCompletely(id) {
  try {
    return await fetch(`/v1/books/?id=${id}`, {
      method: "delete",
    });
  } catch (error) {
    return {
      ok: false,
    };
  }
}

export {
  httpSubmitNewBook,
  httpDeleteBook,
  httpGetBooks,
  httpUpdateBook,
  httpDeleteBookCompletely,
};
