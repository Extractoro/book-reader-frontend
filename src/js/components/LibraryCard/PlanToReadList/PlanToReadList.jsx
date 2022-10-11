import s from './PlanToReadList.module.scss';

import MediaQuery from 'react-responsive';
import PlanToReadCard from '../PlanToReadCard/PlanToReadCard';
import { NavLink } from 'react-router-dom';

const PlanToReadList = ({ library, status }) => {
  console.log(library.length);
  return (
    <>
      <div className={s.infoListContainer}>
        {status === 'plan' ? (
          <p className={s.sectionTitle}>Маю намір прочитати</p>
        ) : (
          <p className={s.sectionTitle}>Читаю</p>
        )}
        <MediaQuery minWidth={768}>
          <div className={s.bookColumns}>
            <p className={s.title}>Назва книги</p>
            <p className={s.author}>Автор</p>
            <p className={s.year}>Рік</p>
            <p className={s.page}>Стор.</p>
          </div>
        </MediaQuery>
        <ul className={library.length > 3 ? s.moreList : s.list}>
          {library.length > 0
            ? library.map(({ _id: id, title, author, year, totalPages }) => (
                <PlanToReadCard
                  key={id}
                  id={id}
                  title={title}
                  author={author}
                  year={year}
                  pages={totalPages}
                  status={status}
                />
              ))
            : null}
        </ul>
        {status === 'plan' && (
          <NavLink className={s.btnTraining} to="/workout">
            My training
          </NavLink>
        )}
      </div>
    </>
  );
};

export default PlanToReadList;
