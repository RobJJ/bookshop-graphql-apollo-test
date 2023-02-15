Questions

1. In the AddBook component that handle the form submit of data...Do we need to keep a component state here? Im using the state to track the current inputs etc and its reset on the form submit... but is this still helpful/needed?

2. Discuss the use of the useEffect that keeps an eye on the getBooks function which is a callback...
   useEffect(() => {
   getBooks();
   }, [getBooks]);

3. When debugging a 404 call on the frontend... how can I catch these errors? The
   im getting this ::
   DELETE http://localhost:8000/v1/books/4b8ec421-de80-439e-98eb-e0213b057c07 404 (Not Found) requests.js:23
   but i cant log more here??

4. When testing the frontend - and you have already linked up feature on the backend - ,, how best to load in dummy data and dummy functions without having to make large changes... is there a design principle to follow here?

5. How to 'log' or correctly debug things on server side code?

todo: update a book inline

// on click event... have the book props open up as inputs and the edit/del buttons change to accept or discard
// on discard, the books old values come back
// on accept, the books new values are updated...
// we only needs to fuk with the DB when accept is clicked.
// lets do the first part first before interating with backend http

// what ive done is change the bookList to use test data instead of books

//
//
bug:
the db is being updated correct when deleting a book, but the front end is showing the wrong list of books... its removing the bottom one every time... when we call the getBooks() method, why is it not repopulating the order of the books displayed?439e

bug:
the front end is being updated nicely with the edit of the book,, but the backend is not being updated
I think both these problems have something to do with the ID of the book not corresponding to what we are doing with the backend... dono..
.. change
