import { Li, BookListItemName,BookListItemDesc,BookListItemText } from './BookListItem.styled';


const BookListItem = () => {



  return (
    <Li>
      <BookListItemName>Deadline. Роман об управлении проектами.</BookListItemName>
      <p>тест на гит</p>
      <BookListItemDesc >Автор:<BookListItemText>Том ДеМарко</BookListItemText></BookListItemDesc>
      <BookListItemDesc >Год:<BookListItemText>2006</BookListItemText></BookListItemDesc>
      <BookListItemDesc >Стор:<BookListItemText>188</BookListItemText></BookListItemDesc>
    </Li>
  );
};

export default BookListItem;

