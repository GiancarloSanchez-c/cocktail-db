import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleCocktail } from "../../store";
import "./CocktailDetail.scss";

export const CocktailDetail = () => {
  const { id } = useParams();
  const { cocktail } = useSelector((state) => state.drinks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleCocktail(id));
  }, [id, dispatch]);

  return (
    <div className="Detail">
      <div className="Wrapper">
        {cocktail.map(
          ({
            idDrink,
            strDrink,
            strDrinkThumb,
            strInstructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strMeasure1,
            strMeasure2,
            strMeasure3,
          }) => (
            <div className="Detail-section" key={idDrink}>
              <img className="Detail-img" src={strDrinkThumb} alt={strDrink} loading="lazy" />
              <div className="">
                <h2 className="Detail-h2"> {strDrink}</h2>
                <h3 className="Detail-h3">Ingredients: </h3>
                <ul className="Detail-ul">
                  <li className="Detail-li">{strIngredient1}</li>
                  <li className="Detail-li">{strIngredient2}</li>
                  <li className="Detail-li">{strIngredient3}</li>
                </ul>
                <h3 className="Detail-h3">Measure</h3>
                <ul className="Detail-ul">
                  <li className="Detail-li">{strMeasure1}</li>
                  <li className="Detail-li">{strMeasure2}</li>
                  <li className="Detail-li">{strMeasure3}</li>
                </ul>
                <h3 className="Detail-h3">Instructions: </h3>
                <p className="Detail-p">{strInstructions}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
