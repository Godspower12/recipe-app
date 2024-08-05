"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { addRecipe } from "../../../redux/slices/recipesSlice";
import RecipeForm from "../../component/RecipeForm";
import axios from "axios";

export default function SubmitRecipePage() {
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    const response = await axios.post("/api/recipes", values);
    dispatch(addRecipe(response.data));
  };

  return (
    <div>
      <h1>Submit Recipe</h1>
      <RecipeForm
        initialValues={{
          title: "",
          description: "",
          ingredients: "",
          instructions: "",
          category: "",
        }}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
