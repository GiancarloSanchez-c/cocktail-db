import "./Header.scss";
import Cocktail from "@assets/cocktail.png";
import { Link } from "react-router-dom";
import { DrinksSearch } from '@components'

export const Header = () => {
  return (
    <div className="Header">
      <div className="Wrapper">
        <h1 className="Header-h1">
          <Link to="/" title="Cocktail" className="Header-a">
            <img src={Cocktail} alt="Logo" className="Header-img" />
          </Link>
          Cocktail Api

        </h1>
        <nav className="Header-nav">
          <ul className="Header-ul">
            <li className="Header-li">
              <Link to='/' title='Home' className="Header-a">Home</Link>
            </li>
          </ul>
        </nav>

       <DrinksSearch />

      </div>
    </div>
  );
};
