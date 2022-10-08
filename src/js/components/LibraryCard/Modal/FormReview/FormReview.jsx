import s from './FormReview.module.scss';
import * as Yup from 'yup';
import { ErrorMessage, Formik } from 'formik';
import Rating from '../FormReview/Rating/Rating';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import MediaQuery from 'react-responsive';
import { useState } from 'react';

import { useUpdateBookMutation } from 'js/redux/books/booksApi';

const FormReview = ({ closeModal, id, rating, resume }) => {
  const [updateResume] = useUpdateBookMutation();
  const [ratingBook, setRatingBook] = useState('');
  const [resumeBook, setResumeBook] = useState('');

  // const reset = () => {
  //   setRatingBook('');
  //   setResumeBook('');
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   updateResume({
  //     ratingBook: rating,
  //     resumeBook: resume,
  //     id,
  //   });
  //   reset();
  // };

  const validationReviewForm = Yup.object().shape({
    resume: Yup.string().min(1, 'Write something').required('Write something'),
  });

  return (
    <>
      <Formik
        initialValues={{
          rating: 0,
          resume: resume,
          id: id,
        }}
        validationSchema={validationReviewForm}
        onSubmit={(values, { resetForm }) => {
          updateResume({
            rating: ratingBook,
            resume: resumeBook,
            id,
          });
          resetForm();
          closeModal();
          Notify.success('Твій відгук збережено');
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit} className={s.form}>
            <div className={s.form__container}>
              <h2 className={s.modalTitle}>Обрати рейтинг книги</h2>
              <Rating values={values} backRate={rating} />
              <ErrorMessage
                component="div"
                name="rating"
                className={s.errorMessage}
              />

              <label className={s.form__label}>
                <h2 className={s.resume}>Резюме</h2>
                <ErrorMessage
                  component="div"
                  name="resume"
                  className={s.errorMessageUp}
                />
                <textarea
                  type="text"
                  name="resume"
                  autoComplete="off"
                  value={values.resume}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="..."
                  className={s.textArea}
                />
              </label>
            </div>

            <MediaQuery maxWidth={767}>
              <div className={s.buttonDiv}>
                <button
                  type="button"
                  className={s.form__btn__close}
                  onClick={() => closeModal()}
                >
                  <span className={s.btn__close__text}>Назад</span>
                </button>
                <button type="submit" className={s.form__btn__submit}>
                  <span className={s.btn__submit__text}>Зберегти</span>
                </button>
              </div>
            </MediaQuery>
            <MediaQuery minWidth={768}>
              <div className={s.buttonDiv}>
                <button
                  type="button"
                  className={s.form__btn__close}
                  onClick={() => closeModal()}
                >
                  <span className={s.btn__close__text}>Назад</span>
                </button>
                <button type="submit" className={s.form__btn__submit}>
                  <span className={s.btn__submit__text}>Зберегти</span>
                </button>
              </div>
            </MediaQuery>
          </form>
        )}
      </Formik>
    </>
  );
};
export default FormReview;
