import { NavLink } from "react-router-dom";
import css from "./Navigation.module.scss";
import clsx from "clsx";

const Navigation = () => {
  const getActiveClass = ({ isActive }) => {
    return clsx(css.navLink, isActive && css.active);
  };
  return (
    <header>
      <div className={css.wrapper}>
        <img className={css.logo} src="src\images\Logo.webp" alt="logo" />
        <nav className={css.navigation}>
          <ul>
            <li>
              <NavLink className={getActiveClass} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={getActiveClass} to="/catalog">
                Catalog
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
