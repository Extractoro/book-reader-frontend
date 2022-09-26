import { useState } from 'react';
import { nanoid } from 'nanoid';
import Media from 'react-media';
import sprite from '../../../sprites/library-sprite.svg';
import s from './LibraryForm.module.css';

const LibraryForm = () => {
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

    reset();
  };

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'book':
        setNameOfBook(value);
        break;

      case 'author':
        setNameOfAuthor(value);
        break;

      case 'year':
        if (value <= date) {
          setYearOfBook(value);
        } else {
          console.log('Notify');
        }
        break;

      case 'pages':
        setAmountOfPages(value);
        break;

      default:
        return;
    }
  };

  return (
    <>
      <Media
        query="(max-width: 767px)"
        render={() => (
          <svg className={s['arrow-back']} width="30" height="25">
            <use href={sprite + '#library-back'} />
          </svg>
        )}
      />

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
