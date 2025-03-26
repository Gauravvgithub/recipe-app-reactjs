import Styles from "./Recipe.module.css";

const Recipe = (props) => {
  return (
    <>
      <div className="container text-center">
        <div id={Styles.recipe}>
            <h2>Recipe Name : {props.recipeList.recipe.label}</h2>
            <img src={props.recipeList.recipe.image} className={Styles.image} style={{margin:"20px"}} />
            <h3 style={{ margin: "5px", color: "#46211A" }}>Meal Type
              {props.recipeList.recipe.mealType.map((type,index)=>(
                <li className={Styles.li} key={index}>
                  {type}
                </li>
             ))}
            </h3>
            <ol>
              <h2
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "20px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  color: "#F1D3B2",
                  background: "#46211A",
                  borderRadius: "50px",
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
            <h3
              style={{
                marginTop: "10px",
                marginBottom: "10px",
                color: "#46211A",
              }}
            >
              {Math.floor(props.recipeList.recipe.calories)} Calories
            </h3>
          </div>
        </div>
    </>
  );
};

export default Recipe;
