import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setRecipes } from "../../redux/slices/recipesSlice";
import RecipeCard from "../component/RecipeCard";
import axios from "axios";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const recipes = useSelector((state: RootState) => state.recipes.recipes);
  const dispatch = useDispatch();

  const handleSearch = async () => {
    const response = await axios.get(`/api/recipes/search?query=${query}`);
    dispatch(setRecipes(response.data));
  };

  return (
    <div>
      <h1>Search Recipes</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
