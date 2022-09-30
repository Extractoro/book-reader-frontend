import { http } from './api';

const baseURL = 'https://book-reader-backend.herokuapp.com';

export const fetchAllBooks = token => {
  return http.get(`${baseURL}/api/books`, {
    headers: {
      Authorization: token,
    },
  });
};

export const fetchOneBook = (id, token) => {
  return http.get(`${baseURL}/api/books/${id}`, {
    headers: {
      Authorization: token,
    },
  });
};

export const addOneBook = (book, token) => {
  return http.post(`${baseURL}/api/books`, book, {
    headers: {
      Authorization: token,
    },
  });
};

export const updateBook = (id, token) => {
  return http.post(`${baseURL}/api/books/${id}`, {
    headers: {
      Authorization: token,
    },
  });
};

export const deleteBook = (id, token) => {
  return http.delete(`${baseURL}/api/books/${id}`, {
    headers: {
      Authorization: token,
    },
  });
};
