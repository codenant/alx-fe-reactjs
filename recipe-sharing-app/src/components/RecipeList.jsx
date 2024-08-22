import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useEffect } from "react";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const { searchTerm, filterRecipes, filteredRecipes } = useRecipeStore();

  useEffect(() => {
    filterRecipes();
  }, [searchTerm, filterRecipes]);

  if (searchTerm === "") {
    return (
      <div>
        <SearchBar />
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/details/${recipe.id}`}>More Details</Link>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <SearchBar />
        {filteredRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/details/${recipe.id}`}>More Details</Link>
          </div>
        ))}
      </div>
    );
  }
};

export default RecipeList;
