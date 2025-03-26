import Styles from "./Recipe.module.css";

const Recipe = (props) => {
  return (
    <div className={Styles.recipe}>
      <h1>Recipe Name : {props.recipeList.recipe.label}</h1>
      <ol>
      <h2>Ingredients</h2>
        {props.recipeList.recipe.ingredients.map((list, index) => (
          <li key={index}>
            {list.text} "key"={index}
          </li>
        ))}
      </ol>
      <img src={props.recipeList.recipe.image} className={Styles.image} />
      <h3>{Math.floor(props.recipeList.recipe.calories)} Calories</h3>
    </div>
  );
};

export default Recipe;
