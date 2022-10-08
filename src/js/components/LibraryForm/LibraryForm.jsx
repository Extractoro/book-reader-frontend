import { useState } from 'react';
import { nanoid } from 'nanoid';
import Media from 'react-media';
import sprite from '../../../sprites/library-sprite.svg';
import s from './LibraryForm.module.css';
import { useAddBookMutation } from 'js/redux/books/booksApi';

const LibraryForm = () => {
  const [add] = useAddBookMutation();
  const [nameOfBook, setNameOfBook] = useState('');
  const [nameOfAuthor, setNameOfAuthor] = useState('');
  const [yearOfBook, setYearOfBook] = useState('');
  const [amountOfPages, setAmountOfPages] = useState('');

  const nameOfBookInputId = nanoid();
  const nameOfAuthorInputId = nanoid();
  const yearOfBookInputId = nanoid();
  const amountOfPagesInputId = nanoid();

  const date = new Date().getFullYear();

  const reset = () => {
    setNameOfBook('');
    setNameOfAuthor('');
    setYearOfBook('');
    setAmountOfPages('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    add({
      title: nameOfBook,
      author: nameOfAuthor,
      year: yearOfBook,
      totalPages: amountOfPages,
    });
    reset();
  };

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'book':
        setNameOfBook(value.trim());
        break;

      case 'author':
        setNameOfAuthor(value.trim());
        break;

      case 'year':
        if (value <= date) {
          setYearOfBook(value.trim());
        } else {
          console.log('Notify');
        }
        break;

      case 'pages':
        setAmountOfPages(value.trim());
        break;

      default:
        return;
    }
  };

  return (
    <>
      <form className={s['form']} onSubmit={handleSubmit}>
        <div>
          <label htmlFor={nameOfBookInputId} className={s['input-label']}>
            <p className={s['paragraph']}>Назва книги</p>
            <input
              className={s['input-1']}
              onChange={handleChange}
              type="text"
              name="book"
              placeholder="..."
              value={nameOfBook}
              required
            />
          </label>
        </div>

        <div className={s['inputs-cont']}>
          <label htmlFor={nameOfAuthorInputId} className={s['input-label']}>
            <p className={s['paragraph']}>Автор книги</p>
            <input
              className={s['input-2']}
              onChange={handleChange}
              type="text"
              name="author"
              placeholder="..."
              value={nameOfAuthor}
              required
            />
          </label>
          <label htmlFor={yearOfBookInputId} className={s['input-label']}>
            <p className={s['paragraph']}>Рік випуску</p>
            <input
              className={s['input-3']}
              onChange={handleChange}
              type="number"
              name="year"
              placeholder="Write year lower than or equal now year"
              value={yearOfBook}
              required
            />
          </label>
          <label htmlFor={amountOfPagesInputId} className={s['input-label']}>
            <p className={s['paragraph']}>Кількість сторінок</p>
            <input
              className={s['input-4']}
              onChange={handleChange}
              type="number"
              name="pages"
              placeholder="..."
              value={amountOfPages}
              required
            />
          </label>
        </div>

        <button type="submit" className={s['button']}>
          Додати
        </button>
      </form>
    </>
  );
};

export default LibraryForm;
