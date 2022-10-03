import MediaQuery from 'react-responsive';
import s from './BooksInfo.module.scss';

// status = plan read done

const BooksInfo = ({ status }) => {
  return (
    <>
      {status === 'done' ? (
        <MediaQuery maxWidth={767}>
          <div className={s.bookInfo}>
            <p className={s.bookInfoText}>Автор:</p>
            <p className={s.bookInfoText}>Рік:</p>
            <p className={s.bookInfoText}>Стор.:</p>
            <p className={s.bookInfoText}>Рейтинг:</p>
          </div>
        </MediaQuery>
      ) : (
        <MediaQuery maxWidth={767}>
          <div className={s.bookInfoGR}>
            <p className={s.bookInfoTextGR}>Автор</p>
            <p className={s.bookInfoTextGR}>Рік</p>
            <p className={s.bookInfoTextGR}>Стор.</p>
          </div>
        </MediaQuery>
      )}
    </>
  );
};

export default BooksInfo;
