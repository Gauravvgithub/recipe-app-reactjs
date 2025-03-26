import { useState, useEffect } from "react";
import "./App.css";
import Recipe from "./components/main/Recipe";
import { BackToTop } from "./components/buttonScroll/backToTop/BackToTop";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  const APP_ID = "705db6fc";
  const APP_KEY = "adf25552569a08da03a991eaa3a287ed";

  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Indian Tea");
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    async function getData() {
      let res = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`,
        {
          headers: {
            "Edamam-Account-User": "GauravRecipe",
          },
        }
      );
      let response = await res.json();
      setDishes(response.hits);
      console.log(response)
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
      <Navbar/>
      <form className="d-flex" onSubmit={submitHandler}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          style={{background:"#F1D3B2", height:"50px"}}
        />
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </form>
      {dishes.map((item, idx) => (
        <Recipe recipeList={item} key={idx} />
      ))}
      <BackToTop/>
    </>
  );
}

export default App;
