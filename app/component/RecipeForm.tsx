"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addRecipe } from "../../redux/slices/recipesSlice";
// import addRecipe from "../redux/slices/recipesSlice";

interface RecipeFormProps {
  initialValues: {
    title: string;
    image: string;
    description: string;
    ingredients: string;
    instructions: string;
    category: string;
  };
  onSubmit: (values: any) => void;
}

const RecipeForm: React.FC<RecipeFormProps> = ({ initialValues, onSubmit }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      image: Yup.string().url("Invalid URL format").required("Required"),
      description: Yup.string().required("Required"),
      ingredients: Yup.string().required("Required"),
      instructions: Yup.string().required("Required"),
      category: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const response = await axios.post("../api/recipes/", values);
        dispatch(addRecipe(response.data));
        resetForm();
        onSubmit(values); // Call the provided onSubmit handler
      } catch (error) {
        console.error("Failed to submit recipe:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-[10px]">
      <div className="flex flex-col">
        <label htmlFor="title" className="text-black">
          Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          className={
            formik.touched.title && formik.errors.title ? "input-error" : ""
          }
        />
        {formik.touched.title && formik.errors.title ? (
          <div className="error">{formik.errors.title}</div>
        ) : null}
      </div>
      <div className="flex flex-col">
        <label htmlFor="image" className="text-black">
          Image URL
        </label>
        <input
          id="image"
          name="image"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.image}
          className={
            formik.touched.image && formik.errors.image ? "input-error" : ""
          }
        />
        {formik.touched.image && formik.errors.image ? (
          <div className="error">{formik.errors.image}</div>
        ) : null}
      </div>
      <div className="flex flex-col">
        <label htmlFor="description" className="text-black">
          Description
        </label>
        <input
          id="description"
          name="description"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
          className={
            formik.touched.description && formik.errors.description
              ? "input-error"
              : ""
          }
        />
        {formik.touched.description && formik.errors.description ? (
          <div className="error">{formik.errors.description}</div>
        ) : null}
      </div>
      <div className="flex flex-col">
        <label htmlFor="ingredients" className="text-black">
          Ingredients
        </label>
        <input
          id="ingredients"
          name="ingredients"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.ingredients}
          className={
            formik.touched.ingredients && formik.errors.ingredients
              ? "input-error"
              : ""
          }
        />
        {formik.touched.ingredients && formik.errors.ingredients ? (
          <div className="error">{formik.errors.ingredients}</div>
        ) : null}
      </div>
      <div className="flex flex-col">
        <label htmlFor="instructions" className="text-black">
          Instructions
        </label>
        <input
          id="instructions"
          name="instructions"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.instructions}
          className={
            formik.touched.instructions && formik.errors.instructions
              ? "input-error"
              : ""
          }
        />
        {formik.touched.instructions && formik.errors.instructions ? (
          <div className="error">{formik.errors.instructions}</div>
        ) : null}
      </div>
      <div className="flex flex-col">
        <label htmlFor="category" className="text-black">
          Category
        </label>
        <input
          id="category"
          name="category"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.category}
          className={
            formik.touched.category && formik.errors.category
              ? "input-error"
              : ""
          }
        />
        {formik.touched.category && formik.errors.category ? (
          <div className="error">{formik.errors.category}</div>
        ) : null}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RecipeForm;
