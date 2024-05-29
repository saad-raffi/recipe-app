import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { confirmAlert } from 'react-confirm-alert';
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

const EditRecipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [recipeDetails, setRecipeDetails] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const categoriesData = await axios.get("http://localhost:3000/categories");
        if (categoriesData.status === 200) {
          setCategories(categoriesData.data);
        }

        const recipeData = await axios.get(`http://localhost:3000/recipes/${id}`);
        if (recipeData.status === 200) {
          setRecipeDetails(recipeData.data);
        }
      } catch (error) {
        console.error("Error loading data:", error);
      }
    }

    load();
  }, [id]);

  const handleUpdateRecipe = async (e) => {
    e.preventDefault();

    confirmAlert({
      title: 'Confirm to proceed',
      message: 'Are you sure to proceed?',
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            const form = e.target;

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
              await axios.patch(`http://localhost:3000/recipes/${id}`, recipeData);
              toast.success("Recipe updated successfully!");
            } catch (error) {
              console.error("Error updating recipe:", error);
              toast.error("Failed to update recipe. Please try again.");
            }
          }
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ]
    });
  };

  const handleDeleteRecipe = () => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Do you really want to delete this?',
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            try {
              await axios.delete(`http://localhost:3000/recipes/${id}`);
              toast.success("Recipe deleted successfully!");
              navigate("/dashboard/manage-recipes");
            } catch (error) {
              console.error("Error deleting recipe:", error);
              toast.error("Failed to delete recipe. Please try again.");
            }
          }
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ]
    });
  };

  return (
    <div className="w-full px-16">
      <h1 className="text-4xl mb-4">Edit Recipe</h1>
      <form onSubmit={handleUpdateRecipe} className="w-full">
        <div className="mb-4">
          <label htmlFor="title">Title </label>
          <input
            defaultValue={recipeDetails?.title}
            type="text"
            name="title"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price">Price </label>
          <input
            type="number"
            name="price"
            defaultValue={recipeDetails?.price}
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category">Category </label>
          <select name="category" id="category" className="w-full py-3 px-5 border">
            {categories.map((category) => (
              <option
                key={category.id}
                selected={category.title === recipeDetails?.category}
                value={category.title}
              >
                {category.title}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="description">Description </label>
          <textarea
            defaultValue={recipeDetails?.description}
            name="description"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <input
            type="submit"
            value="Edit Recipe"
            className="w-full btn py-3 px-5 border btn-neutral"
          />
        </div>
      </form>
      <button onClick={handleDeleteRecipe} className="w-full py-3 px-5 border btn btn-error">
        Delete Recipe
      </button>
      <ToastContainer />
    </div>
  );
};

export default EditRecipe;
