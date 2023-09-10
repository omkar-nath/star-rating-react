import React, { useState } from 'react';

const StarRating = ({ count = 5, onChange, size, rating }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseOver = (index) => {
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (index) => {
    onChange(index);
  };

  return (
    <>
      {[...new Array(count)].map((array, index) => {
        return (
          <>
            <span
              className={index <= (hoverRating || rating) ? 'on' : 'off'}
              onMouseOver={() => handleMouseOver(index)}
              onMouseLeave={() => handleMouseLeave()}
              onClick={() => handleClick(index)}
            >
              &#9733;
            </span>
          </>
        );
      })}
    </>
  );
};

export default StarRating;
