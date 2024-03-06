import { gql } from '@apollo/client';

export const GET_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      books {
        _id
        thoughtText
        createdAt
      }
    }
  }
`;

export const GET_BOOKS = gql`
  query getBooks {
    books {
      bookId
      title
      authors
      description
      image
      link
    }
  }
`;

export const GET_SINGLE_BOOK = gql`
  query getSingleBook($bookId: ID!) {
    book(bookId: $bookId) {
      bookId
      title
      authors
      description
      image
      link
    }
  }
`;

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      books {
        bookId
        title
        description
        authors
      }
    }
  }
`;
