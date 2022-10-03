
import s from './AddBookRead.module.css';
import Media from 'react-media';
const AddBookRead = () => {
  return (
    <div className={s['thumbBtn']}>
      <Media
        queries={{
          medium: '(min-width: 768px) and (max-width: 2100px)',
        }}
      >
        {matches => (
          <>
            {matches.medium && (
              <button className={s['thumb']}>
                <p>Почати тренування</p>
              </button>
            )}
          </>
        )}
      </Media>
    </div>
  );
};

export default AddBookRead;
