import { Route, Routes } from "react-router-dom";
import { CocktailDetail, Header } from "../components";
import { Home } from "../pages";

export const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cocktail/:id" element={<CocktailDetail />} />
      </Routes>
    </>
  );
};
