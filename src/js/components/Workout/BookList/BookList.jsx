import BookListItems from './BookListItem';
import {BookListThumb} from './BooksList.styled';

const BookList = () => {
  return (
    <BookListThumb >
      <ul>
        <BookListItems />
      </ul>
    </BookListThumb>

  );
};

export default BookList;
