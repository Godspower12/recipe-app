"use client";

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { setRecipes } from "../redux/slices/recipesSlice";
import RecipeCard from "./component/RecipeCard";
import RecipeForm from "./component/RecipeForm";
import axios from "axios";
import Link from "next/link";
import Modal from "./component/Modal";

export default function HomePage() {
  const recipes = useSelector((state: RootState) => state.recipes.recipes);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await axios.get("/api/recipes");
      dispatch(setRecipes(response.data));
    };

    fetchRecipes();
  }, [dispatch]);

  const handleAddRecipe = (values: any) => {
    console.log("New recipe added:", values);
    // TODO: Send recipe to server or update state
    setShow(false);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <button
        onClick={() => setShow(true)}
        className="bg-[#000000] text-[#FFFFFF] font-bold text-[20px] rounded-[8px] px-[10px] py-[5px] m-[20px]"
      >
        Add New Recipe
      </button>
      <Modal isVisible={show} onClose={() => setShow(false)}>
        <RecipeForm
          initialValues={{
            title: "",
            description: "",
            ingredients: "",
            instructions: "",
            category: "",
          }}
          onSubmit={handleAddRecipe}
        />
      </Modal>
      <h1 className="text-[#000000] font-bold text-[24px] mb-[20px]">
        Latest Recipes
      </h1>
      <div className="flex flex-wrap items-center w-[1240px] justify-center gap-[20px]">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
