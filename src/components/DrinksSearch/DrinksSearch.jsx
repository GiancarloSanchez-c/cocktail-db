import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchCocktails } from "../../store";
import "./DrinksSearch.scss";

export const DrinksSearch = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchSearchCocktails(search));
    setSearch("");
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <input className="Form-input" type="text" placeholder="Search Drink" value={search} onChange={handleChange} />
      <button className="Form-button">Search</button>
    </form>
  );
};
