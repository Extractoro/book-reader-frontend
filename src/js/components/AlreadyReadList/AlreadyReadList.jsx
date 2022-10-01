import s from './AlreadyReadList.module.scss';

import MediaQuery from 'react-responsive';
// import AlreadyReadCard from './AlreadyReadCard/AlreadyReadCard';

const AlreadyReadList = ({ library }) => {
  return (
    <>
      <>
        <p className={s.sectionTitle}>Already read</p>
        <MediaQuery minWidth={768}>
          <div className={s.bookInfo}>
            <p className={s.title}>Book title</p>
            <p className={s.author}>Author</p>
            <p className={s.year}>Year</p>
            <p className={s.page}>Pages</p>
            <p className={s.bookInfoText}>Rating</p>
          </div>
        </MediaQuery>
      </>
      {/* {library.length > 0 && (
        <>
          <p className={s.sectionTitle}>Already read</p>
          <MediaQuery minWidth={768}>
            <div className={s.bookInfo}>
              <p className={s.title}>Book title</p>
              <p className={s.author}>Author</p>
              <p className={s.year}>Year</p>
              <p className={s.page}>Pages</p>
              <p className={s.bookInfoText}>Rating</p>
            </div>
          </MediaQuery>
        </>
      )} */}

      <div className={s.container}>
        <ul className={s.list}>
          {/* {library.length > 0
            ? library.map(
                ({
                  _id: id,
                  title,
                  author,
                  year,
                  totalPages,
                  resume,
                  rating,
                }) => (
                  <AlreadyReadCard
                    key={id}
                    id={id}
                    title={title}
                    author={author}
                    year={year}
                    pages={totalPages}
                    rating={rating}
                    comment={resume}
                  />
                )
              )
            : null} */}
        </ul>
      </div>
    </>
  );
};

export default AlreadyReadList;
