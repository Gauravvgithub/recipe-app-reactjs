import Styles from "./Recipe.module.css";

const Recipe = (props) => {
  return (
    <>
      <div className={Styles.recipe}>
        <h1>Recipe Name : {props.recipeList.recipe.label}</h1>
        <ol>
          <h2
            style={{
              marginTop: "20px",
              marginBottom: "40px",
              color: "#46211A",
            }}
          >
            Ingredients
          </h2>
          {props.recipeList.recipe.ingredients.map((list, index) => (
            <li className={Styles.li} key={index}>
              {list.text}
            </li>
          ))}
        </ol>
        <h2 style={{ marginBottom: "20px", color: "#46211A" }}>
          Meal Type : {props.recipeList.recipe.mealType}
        </h2>
        <img src={props.recipeList.recipe.image} className={Styles.image} />
        <h3
          style={{ marginTop: "20px", marginBottom: "20px", color: "#46211A" }}
        >
          {Math.floor(props.recipeList.recipe.calories)} Calories
        </h3>
      </div>
    </>
  );
};

export default Recipe;
