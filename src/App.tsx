import { FC, useState } from 'react';
import StarRating from './StarRating';
import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  const [rating, setRating] = useState(0);

  const handleChange = (rate) => {
    setRating(rate);
  };
  return (
    <div>
      <h1>Custom Star Rating component!</h1>

      <div className="star-rating">
        <StarRating count={5} onChange={handleChange} rating={rating} />
      </div>
      <div>
        {rating <= 2 && <div className="emojee">We are really sorry ! 😔</div>}
        {rating >= 3 && <div className="emojee">Happy to help ! 😘</div>}
      </div>
    </div>
  );
};
