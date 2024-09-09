import { useParams } from "react-router-dom";
import data from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const details = data.find((recipe) => recipe.id === +id);

  return (
    <div
      key={details.id}
      className="bg-neutral-50 rounded mx-auto mt-10  w-8/12 shadow-md"
    >
      <img src={details.image} alt={details.title} className="m-auto py-5" />
      <h1 className="font-bold text-yellow-600 mx-2 text-lg">
        {details.title}
      </h1>
      <h3 className="font-semibold ml-5 mt-2">Ingredients:</h3>
      <p className="font-light ml-6">{details.ingredients}</p>
      <h3 className="font-semibold ml-5">Instructions:</h3>
      <p className="font-light ml-6 pb-5 ">{details.steps}</p>
    </div>
  );
}

export default RecipeDetail;
