import s from './Rating.module.scss';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Rating = ({ values, backRate }) => {
  const [rating, setRating] = useState(backRate);
  const [hover, setHover] = useState(null);
  values.rating = rating;

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className={s.star}
              size={17}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              color={ratingValue <= (hover || rating) ? '#FF6B08' : '#e4e5e9'}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Rating;
