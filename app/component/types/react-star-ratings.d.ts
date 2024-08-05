declare module 'react-star-ratings' {
    import React from 'react';
  
    interface StarRatingsProps {
      rating: number;
      starRatedColor?: string;
      starEmptyColor?: string;
      starHoverColor?: string;
      starDimension?: string;
      starSpacing?: string;
      changeRating?: (newRating: number) => void;
      numberOfStars?: number;
      name?: string;
    }
  
    const StarRatings: React.FC<StarRatingsProps>;
  
    export default StarRatings;
  }