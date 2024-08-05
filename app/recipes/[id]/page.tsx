// app/recipes/[id]/page.tsx

"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Use the correct import for App Router
import axios from "axios";
import Rating from "../../component/Rating";
import CommentSection from "../../component/CommentSection"; // Ensure path is correct
import Image from "next/image";

interface Recipe {
  id: string;
  image: string;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string;
  ratings: number[];
  comments: string[];
}

interface RecipeDetailPageProps {
  params: {
    id: string;
  };
}

const RecipeDetailPage: React.FC<RecipeDetailPageProps> = ({ params }) => {
  const router = useRouter();
  const { id } = params;
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState<string[]>([]);

  useEffect(() => {
    if (id) {
      const fetchRecipe = async () => {
        try {
          const response = await axios.get<Recipe>(`/api/recipes/${id}`);
          // Ensure ingredients is an array
          const fetchedRecipe = response.data;
          if (!Array.isArray(fetchedRecipe.ingredients)) {
            console.error(
              "Ingredients is not an array:",
              fetchedRecipe.ingredients
            );
            fetchedRecipe.ingredients = []; // Fallback to empty array
          }

          setRecipe(fetchedRecipe);
          setRating(
            fetchedRecipe.ratings.reduce((a: number, b: number) => a + b, 0) /
              fetchedRecipe.ratings.length
          );
          setComments(fetchedRecipe.comments);
        } catch (error) {
          console.error("Error fetching recipe:", error);
        }
      };

      fetchRecipe();
    }
  }, [id]);

  const handleRating = async (newRating: number) => {
    try {
      await axios.post(`/api/recipes/${id}/rate`, { rating: newRating });
      setRating(newRating);
    } catch (error) {
      console.error("Error submitting rating:", error);
    }
  };

  const handleAddComment = async (comment: string) => {
    try {
      await axios.post(`/api/recipes/${id}/comment`, { comment });
      setComments([...comments, comment]);
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  if (!recipe)
    return <div className=" flex justify-center items-center">Loading...</div>;

  return (
    <div className=" w-full xl:w-[1440px] px-[100px] py-[20px]">
      <div className="flex">
        <div className="w-1/2 flex flex-col items-center justify-center">
          <Image
            src={recipe.image}
            width={400}
            height={400}
            alt="img"
            className="rounded-[8px]"
          />
          <Rating rating={rating} onRate={handleRating} />
        </div>
        <div className="w-1/2">
          {" "}
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
          <p>{recipe.ingredients.join(", ")}</p>
          <p>{recipe.instructions}</p>
        </div>
      </div>
      <CommentSection comments={comments} onAddComment={handleAddComment} />
    </div>
  );
};
export default RecipeDetailPage;
