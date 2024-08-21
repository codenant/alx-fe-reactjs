import useRecipeStore from "./recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteButton = useRecipeStore((state) => state.deleteRecipes);

  const handleClick = () => {
    deleteButton(recipeId);
  };

  return <button onClick={handleClick}>Delete</button>;
};

export default DeleteRecipeButton;
