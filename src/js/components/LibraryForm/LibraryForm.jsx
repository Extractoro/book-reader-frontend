import { useState } from 'react';
import { nanoid } from 'nanoid';
import '../../../sass/components/LibraryForm/LibraryForm.css';

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
          console.log('err');
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
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor={nameOfBookInputId} className="label">
        <p className="paragraph">Назва книги</p>
        <input
          className="input"
          onChange={handleChange}
          type="text"
          name="book"
          placeholder="..."
          value={nameOfBook}
          required
        />
      </label>

      <label htmlFor={nameOfAuthorInputId} className="label">
        <p className="paragraph">Автор книги</p>
        <input
          className="input"
          onChange={handleChange}
          type="text"
          name="author"
          placeholder="..."
          value={nameOfAuthor}
          required
        />
      </label>

      <label htmlFor={yearOfBookInputId} className="label">
        <p className="paragraph">Рік випуску</p>
        <input
          className="input"
          onChange={handleChange}
          type="number"
          name="year"
          placeholder="Write year lower than or equal now year"
          value={yearOfBook}
          required
        />
      </label>

      <label htmlFor={amountOfPagesInputId} className="label">
        <p className="paragraph">Кількість сторінок</p>
        <input
          className="input"
          onChange={handleChange}
          type="number"
          name="pages"
          placeholder="..."
          value={amountOfPages}
          required
        />
      </label>

      <button type="submit" className="button">
        Додати
      </button>
    </form>
  );
};

export default LibraryForm;
