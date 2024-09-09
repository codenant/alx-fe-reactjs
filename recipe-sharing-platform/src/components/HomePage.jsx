import { useState, useEffect } from "react";
import data from "../data.json";

const HomePage = () => {
  const [recipes, setRecipes] = useState();

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center">
      {recipes?.map((recipe) => (
        <div
          key={recipe.id}
          className="bg-neutral-50 m-5 rounded w-8/12 shadow-md hover:shadow-lg transition ease-in-out duration-100"
        >
          <img
            src={recipe.image}
            className="m-auto py-5 hover:scale-105 transition ease-in-out duration-300"
          />
          <h1 className="font-bold text-yellow-600 mx-2">{recipe.title}</h1>
          <p className="font-light text-zinc-600 p-2">{recipe.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
