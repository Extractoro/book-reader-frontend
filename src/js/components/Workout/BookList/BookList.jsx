// import BookListItems from './BookListItem';
import {BookListThumb} from './BooksList.styled';
import Table from './Table';
import React from 'react';

const BookList = () => {
  return (
    <BookListThumb >
      <Table/>
      {/*<ul>*/}
      {/*  <BookListItems />*/}
      {/*</ul>*/}
    </BookListThumb>

  );
};

export default BookList;
