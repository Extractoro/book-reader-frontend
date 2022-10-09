import s from './LibraryButton.module.scss';



import { Link } from 'react-router-dom';


export const LibraryButton = () => {
  return (
    <Link to={'/workout'} className={s.button}>
      <span className={s.buttonText}>Моє тренування</span>
    </Link>
  );
};