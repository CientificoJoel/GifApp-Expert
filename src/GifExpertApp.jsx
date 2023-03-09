import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Naruto"]);
  const onAddCategory = (newCategory) => {
    const newCategoryUpper = newCategory.toUpperCase();
    const categoriesUpper = categories.map((values) => values.toUpperCase());
    if (categoriesUpper.includes(newCategoryUpper)) return;
    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      <h1>GifExpertApp Por: Joel Rodríguez Hernández</h1>
      <AddCategory onNewCategory={onAddCategory} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
