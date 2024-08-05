"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import RecipeForm from "../../../component/RecipeForm";
import axios from "axios";

export default function EditRecipePage() {
  const router = useRouter();
  const { id } = router.query;
  const [initialValues, setInitialValues] = useState({
    image: "",
    title: "",
    description: "",
    ingredients: "",
    instructions: "",
    category: "",
  });

  useEffect(() => {
    if (id) {
      const fetchRecipe = async () => {
        const response = await axios.get(`/api/recipes/${id}`);
        setInitialValues(response.data);
      };

      fetchRecipe();
    }
  }, [id]);

  const handleSubmit = async (values: any) => {
    await axios.put(`/api/recipes/${id}`, values);
  };

  return (
    <div>
      <h1>Edit Recipe</h1>
      <RecipeForm initialValues={initialValues} onSubmit={handleSubmit} />
    </div>
  );
}
