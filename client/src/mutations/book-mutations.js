import { gql } from "@apollo/client";
//
// Be very mindful of how you have named variables in your mutations,, the top level mutation you create is like a new function you are creating and it calls that set up mutation in your schema! that mutation needs to have correct variable and it matches the input that your new top level func takes
const DELETE_BOOK = gql`
  mutation deleteBookWithId($id: ID!) {
    deleteBookWithId(bookId: $id) {
      name
      author
      bookId
    }
  }
`;
//
//
const ADD_NEW_BOOK = gql`
  mutation addNewBook($name: String!, $author: String!, $rating: String!) {
    addNewBook(name: $name, author: $author, rating: $rating) {
      name
      author
      rating
      bookId
    }
  }
`;

export { DELETE_BOOK, ADD_NEW_BOOK };
