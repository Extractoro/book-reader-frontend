import s from './AlreadyReadList.module.scss';

import MediaQuery from 'react-responsive';
import AlreadyReadCard from '../AlreadyReadCard/AlreadyReadCard';

const AlreadyReadList = ({ library }) => {
  return (
    <div className={s.container}>
      {library.length > 0 && (
        <>
          <p className={s.sectionTitle}>Прочитано</p>
          <MediaQuery minWidth={768}>
            <div className={s.bookInfo}>
              <p className={s.title}>Назва книги</p>
              <p className={s.author}>Автор:</p>
              <p className={s.year}>Рік:</p>
              <p className={s.page}>Стор.:</p>
              <p className={s.bookInfoText}>Рейтинг:</p>
            </div>
          </MediaQuery>
        </>
      )}

      <ul className={library.length > 3 ? s.moreReadList : s.list}>
        {library.length > 0
          ? library.map(
              ({
                _id: id,
                title,
                author,
                year,
                totalPages,
                rating,
                resume,
              }) => (
                <AlreadyReadCard
                  key={id}
                  id={id}
                  title={title}
                  author={author}
                  year={year}
                  pages={totalPages}
                  rating={rating}
                  resume={resume}
                />
              )
            )
          : null}
      </ul>
    </div>
  );
};

export default AlreadyReadList;
