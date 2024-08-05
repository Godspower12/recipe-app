import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Rating from "./Rating";
import axios from "axios";

interface RecipeCardProps {
  recipe: {
    id: string;
    title: string;
    description: string;
    image: string;
  };
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const [rating, setRating] = useState(0);
  // const { id } = params;

  const handleRating = async (newRating: number) => {
    try {
      await axios.post(`/api/recipes/rate`, { rating: newRating });
      setRating(newRating);
    } catch (error) {
      console.error("Error submitting rating:", error);
    }
  };

  return (
    <div className="bg-[F0F0F0] border shadow-md rounded-[6px] w-[310px] card h-[320px] py-[10px] px-[10px] flex flex-col items-center gap-[5px] text-black">
      <div className="relative w-[300px] h-[200px]">
        <Image
          src={recipe.image}
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="img"
          className="absolute rounded-[8px]"
        />
      </div>

      <h2 className="font-bold 48px">{recipe.title}</h2>
      {/* <Rating rating={rating} onRate={handleRating} /> */}
      <p>{recipe.description}</p>
      <Link
        href={`/recipes/${recipe.id}`}
        className="bg-black text-[#ffffff] button w-[250px] flex justify-center rounded-[6px] py-[5px]"
      >
        View Recipe
      </Link>
    </div>
  );
};

export default RecipeCard;
