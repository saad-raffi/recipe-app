import axios from "axios";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddRecipe = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const response = await axios.get("http://localhost:3000/categories");
        if (response.status === 200) {
          setCategories(response.data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }

    load();
  }, []);

  const handleCreateRecipe = async (e) => {
    e.preventDefault();

    if (window.confirm("Do you want to Add this Recipe?")) {
      const form = e.target;

      const id = form.id.value;
      const title = form.title.value;
      const price = form.price.value;
      const category = form.category.value;
      const description = form.description.value;

      const recipeData = {
        id,
        title,
        price,
        category,
        description,
      };

      try {
        await axios.post("http://localhost:3000/recipes", recipeData);
        toast.success("Recipe added successfully!");
        form.reset(); // Reset the form after successful submission
      } catch (error) {
        console.error("Error adding recipe:", error);
        toast.error("Failed to add recipe. Please try again.");
      }
    }
  };

  return (
    <div className="w-full px-16">
      <h1 className="text-4xl mb-4">Add Recipe</h1>
      <form onSubmit={handleCreateRecipe} className="w-full">
        <div className="mb-4">
          <label htmlFor="id">Id </label>
          <input type="text" name="id" className="w-full py-3 px-5 border" />
        </div>
        <div className="mb-4">
          <label htmlFor="title">Title </label>
          <input type="text" name="title" className="w-full py-3 px-5 border" />
        </div>
        <div className="mb-4">
          <label htmlFor="price">Price </label>
          <input type="number" name="price" className="w-full py-3 px-5 border" />
        </div>
        <div className="mb-4">
          <label htmlFor="category">Category </label>
          <select name="category" id="category" className="w-full py-3 px-5 border">
            {categories.map((category) => (
              <option key={category.id} value={category.title}>
                {category.title}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="description">Description </label>
          <textarea name="description" className="w-full py-3 px-5 border" />
        </div>
        <div className="mb-4">
          <input type="submit" value="Add Recipe" className="w-full btn py-3 px-5 border btn-neutral" />
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddRecipe;
