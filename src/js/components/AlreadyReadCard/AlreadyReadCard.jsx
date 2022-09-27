import s from './AlreadyReadCard.module.scss';
import MediaQuery from 'react-responsive';
const AlreadyReadCard = () => {

  return (
    <li className={s.card}>
      <div className={s.iconTitle}>
        <div className={s.navIcon}>
          <p>іконка прочитаної книги</p>
        </div>
        <p className={s.bookTitle}>Назва книги</p>
      </div>
      <MediaQuery maxWidth={767}>
        <div className={s.bookInfoWrapper}>
       
          <MediaQuery maxWidth={767}>
            <div className={s.bookMoreInfo}>
              <p
                className={s.bookMoreInfoAuthor}>
                автор
              </p>
              <p className={s.bookMoreInfoYear}>рік</p>
              <p className={s.bookMoreInfoPage}>сторінки</p>
              <div className={s.bookMoreInfoPage}>
                  <div className={s.marginStar}>
                    <p>рейтинг*****</p>
                  </div>
              </div>
            </div>
          </MediaQuery>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={768}>
        <MediaQuery minWidth={768} maxWidth={1279}>
          <p className={s.bookMoreInfoAuthor}>
            автор
          </p>
        </MediaQuery>
        <MediaQuery minWidth={1280}>
          <p className={s.bookMoreInfoAuthor}>
            автор
          </p>
        </MediaQuery>
        <p className={s.bookMoreInfoYear}>рік</p>
        <p className={s.bookMoreInfoPage}>сторінки</p>
       
          <div className={s.marginStar}>
            <p>рейтинг*****</p>
          </div>
       
      </MediaQuery>
      <button className={s.button}>
        <span className={s.buttonText}>Resume</span>
      </button>
    </li>
  );
};

export default AlreadyReadCard;
