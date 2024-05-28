import { useEffect } from "react";
import Banner from "../components/home/Banner";
import { useState } from "react";
import RecepiCard from "../components/cards/RecepiCard";
import CategoryCard from "../components/cards/CategoryCard";
import Footer from "../components/shared/Footer";

export default function Home() {
  const [recipes, setRescipes] = useState([]);
  const [categoris, setCategories] = useState([]);
  
  useEffect(() => {
    async function load() {
      try {
        // Fetch recipes
        const recipeRes = await fetch("http://localhost:3000/recipes");
        if (!recipeRes.ok) throw new Error('Failed to fetch recipes');
        const recipeData = await recipeRes.json();
        setRescipes(recipeData);

        // Fetch categories
        const categoryRes = await fetch("http://localhost:3000/categories");
        if (!categoryRes.ok) throw new Error('Failed to fetch categories');
        const categoryData = await categoryRes.json();
        setCategories(categoryData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    load();
  }, []);

  console.log("Recipes:", recipes);
  console.log("Categories:", categoris);

  return (
    <div>
      <Banner />

      <div className="mx-16">
        <h1 className="text-4xl my-20 text-center">Our Recipe Categories</h1>
        <div className="grid grid-cols-4 gap-6">
          {categoris?.map((category) => (
            <CategoryCard key={category?.id} category={category} />
          ))}
        </div>
      </div>

      <div className="mx-16">
        <h1 className="text-4xl my-20 text-center">Our Newest Recipes</h1>
        <div className="grid grid-cols-4 gap-6">
          {recipes
            ?.slice()
            ?.reverse()
            ?.slice(0, 4)
            ?.map((recipe) => (
              <RecepiCard key={recipe?.id} recipe={recipe} />
            ))}
        </div>
      </div>
    </div>
  );
}
