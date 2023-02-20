import { gql } from "@apollo/client";

const GET_BOOKS = gql`
  query getBooks {
    books {
      name
      author
      rating
      bookId
      inStock
    }
  }
`;

export { GET_BOOKS };
