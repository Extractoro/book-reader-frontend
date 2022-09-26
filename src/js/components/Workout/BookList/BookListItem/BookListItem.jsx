import { Li, BookListItemName,BookListItemDesc,BookListItemText } from './BookListItem.styled';
import {BsBriefcaseFill} from 'react-icons/all';


const BookListItem = () => {



  return (
    <Li className='book-list-item'>
      <BookListItemName>Deadline. Роман об управлении проектами.</BookListItemName>
      <BookListItemDesc >Автор:</BookListItemDesc><BookListItemText>Том ДеМарко</BookListItemText>
      <BookListItemDesc >Год:</BookListItemDesc><BookListItemText>2006</BookListItemText>
      <BookListItemDesc >Стор:</BookListItemDesc><BookListItemText>188</BookListItemText>
    </Li>
  );
};

export default BookListItem;
