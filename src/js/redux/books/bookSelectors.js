const getAllBooks = state => state.books.books;

const getPlan = state => {
  const allBooks = getAllBooks(state) || [];
  return allBooks?.filter(book => book.status === 'plan');
};
const getRead= state => {
  const allBooks = getAllBooks(state) || [];
  return allBooks?.filter(book => book.status === 'read');
};
const getDone = state => {
  const allBooks = getAllBooks(state) || [];
  return allBooks?.filter(book => book.status === 'done');
};

const bookSelectors = {
  getAllBooks,
  getPlan,
  getRead,
  getDone,
};

export default bookSelectors;
