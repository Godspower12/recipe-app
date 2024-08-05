import React from "react";
import StarRatings from "react-star-ratings";

interface RatingProps {
  rating: number;
  onRate: (rating: number) => void;
}

const Rating: React.FC<RatingProps> = ({ rating, onRate }) => {
  return (
    <StarRatings
      rating={rating}
      starRatedColor="orange"
      changeRating={onRate}
      numberOfStars={5}
      name="rating"
    />
  );
};

export default Rating;
