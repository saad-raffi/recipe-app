import { useEffect, useState } from "react";
import Banner from "../components/home/Banner";
import RecepiCard from "../components/cards/RecepiCard";
import CategoryCard from "../components/cards/CategoryCard";
import Footer from "../components/shared/Footer";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  useEffect(() => {
    async function load() {
      try {
        // Fetch recipes
        const recipeRes = await fetch("http://localhost:3000/recipes");
        if (!recipeRes.ok) throw new Error('Failed to fetch recipes');
        const recipeData = await recipeRes.json();
        setRecipes(recipeData);

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

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleShowAllRecipes = () => {
    setSelectedCategory(null);
  };

  const filteredRecipes = selectedCategory
    ? recipes.filter(recipe => recipe.categoryId === selectedCategory)
    : recipes;

  return (
    <div>
      <Banner />

      <div className="mx-16">
        <h1 className="text-4xl my-20 text-center">Our Recipe Categories</h1>
        <div className="grid grid-cols-4 gap-10">
          {categories?.map((category) => (
            <CategoryCard 
              key={category?.id} 
              category={category} 
              onClick={() => handleCategoryClick(category.id)} 
            />
          ))}
        </div>
      </div>

      <div className="mx-16">
        <h1 className="text-4xl my-20 text-center">
          {selectedCategory 
            ? categories.find(category => category.id === selectedCategory)?.title 
            : "All Recipes"
          }
        </h1>
        {selectedCategory && (
          <div className="text-center mb-6">
            <button 
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition" 
              onClick={handleShowAllRecipes}
            >
              Show All Recipes
            </button>
          </div>
        )}
        <div className="grid grid-cols-3 gap-3">
          {filteredRecipes.map((recipe) => (
            <RecepiCard key={recipe?.id} recipe={recipe} />
          ))}
        </div>
      </div>
      
      <Footer></Footer>
    </div>
  );
}
