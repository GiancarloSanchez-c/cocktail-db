import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchAllCocktails } from "../../store";

import "./CategoryCard.scss";

export const CategoryCard = () => {
  const { cocktails } = useSelector((state) => state.drinks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCocktails());
  }, [dispatch]);

  return (
    <div className="Card">
      <div className="Card-desktop">
        {cocktails &&
          cocktails?.map(({ idDrink, strDrink, strDrinkThumb }) => (
            <div className="Drinks-cocktails" key={idDrink}>
              <h3 className="Card-h3"> {strDrink} </h3>
              <img className="Card-img" src={strDrinkThumb} alt={strDrink} loading="lazy" />
              <Link to={`/cocktail/${idDrink}`} title={strDrink} className="Card-a">
                View More
              </Link>
            </div>
          ))}
      </div>

      <div className="Card-mobile">
        <Swiper grabCursor={true} slidesPerView={"auto"}>
          {cocktails &&
            cocktails?.map(({ idDrink, strDrink, strDrinkThumb }) => (
              <SwiperSlide key={idDrink}>
                <h3 className="Card-h3"> {strDrink} </h3>
                <img className="Card-img" src={strDrinkThumb} alt={strDrink} loading="lazy" />
                <Link to={`/cocktail/${idDrink}`} title={strDrink} className="Card-a">
                  View More
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};
