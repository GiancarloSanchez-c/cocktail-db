import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchAlcoholic, fetchCategory, fetchFilterAlcoholic, fetchFilterCategory, fetchFilterGlasses, fetchFilterIngredients, fetchGlasses, fetchIngredients } from "../../store";
import "./CategoryList.scss";

export const CategoryList = () => {
  const dispatch = useDispatch();
  const { category, glass, alcoholic, ingredients } = useSelector((state) => state.drinks);

  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchGlasses());
    dispatch(fetchAlcoholic());
    dispatch(fetchIngredients());
  }, [dispatch]);

  const handleFilterCategory = (e) => {
    e.preventDefault();
    dispatch(fetchFilterCategory(e.target.value));
  };

  const handleFilterGlass = (e) => {
    e.preventDefault();
    dispatch(fetchFilterGlasses(e.target.value));
  };

  const handleFilterAlcoholic = (e) => {
    e.preventDefault();
    dispatch(fetchFilterAlcoholic(e.target.value));
  };


  const handleFilterIngredients = (e) => {
    e.preventDefault();
    dispatch(fetchFilterIngredients(e.target.value));
  };

  return (
    <div className="Category">
      <div className="Wrapper">
        <select onChange={handleFilterCategory} className="Category-select">
          <option hidden selected> Filter Category </option>
          {category?.map((c, i) => (
            <option className="Category-option" key={i} value={c.strCategory}>
              {`${c.strCategory[0].toUpperCase()}${c.strCategory.slice(1)}`}
            </option>
          ))}
        </select>
        <select onChange={handleFilterGlass} className="Category-select">
          <option hidden  selected> Filter Glass </option>
          {glass?.map((g, i) => (
            <option className="Category-option" key={i} value={g.strCategory}>
              {`${g.strGlass[0].toUpperCase()}${g.strGlass.slice(1)}`}
            </option>
          ))}
        </select>

        <select onChange={handleFilterAlcoholic} className="Category-select">
          <option hidden selected> Filter Alcoholic </option>
          {alcoholic?.map((a, i) => (
            <option className="Category-option" key={i} value={a.strCategory}>
              {`${a.strAlcoholic[0].toUpperCase()}${a.strAlcoholic.slice(1)}`}
            </option>
          ))}
        </select>

        <select onChange={handleFilterIngredients} className="Category-select">
          <option hidden selected> Filter Ingredients </option>
          {ingredients?.map((a, i) => (
            <option className="Category-option" key={i} value={a.strCategory}>
              {`${a.strIngredient1[0].toUpperCase()}${a.strIngredient1.slice(1)}`}
            </option>
          ))}
        </select>

      </div>
    </div>
  );
};
