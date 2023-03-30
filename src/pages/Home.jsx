import { CategoryList, CategoryCard } from "@components";
import "./Home.scss";

export const Home = () => {



  return (
    <>
      <main className="Main">
        <CategoryList />
        <div className="Drinks">
          <div className="Wrapper">
            <CategoryCard />
          </div>
        </div>
      </main>
    </>
  );
};
{
  /*  {cocktails &&
   cocktails?.map(({ idDrink, strDrink, strDrinkThumb }) => (
     <div className="Drinks-cocktails" key={idDrink}>
       
     </div>
   ))} */
}
