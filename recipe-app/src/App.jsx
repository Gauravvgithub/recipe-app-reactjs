import { useState, useEffect } from "react";
import "./App.css";
import Recipe from "./components/Recipe";

function App() {
  // const APP_ID = "618b2754";
  // const APP_KEY = "fe545478b74e8e4fcc32a68dd3f5aa80";
  const APP_ID = "705db6fc";
  const APP_KEY = "adf25552569a08da03a991eaa3a287ed";

  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Indian Chai");
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    async function getData() {
      let res = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`,
        {
          headers: {
            "Edamam-Account-User": "GauravRecipe",
          },
        }
      );
      let response = await res.json();
      setDishes(response.hits);
    }
    getData();
  }, [query]);

  const submitHandler = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <>
      <form className="d-flex" onSubmit={submitHandler}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button className="btn btn-dark" type="submit">
          Search
        </button>
      </form>
      {dishes.map((item, idx) => (
        <Recipe recipeList={item} key={idx} />
      ))}
    </>
  );
}

export default App;
