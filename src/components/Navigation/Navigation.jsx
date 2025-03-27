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
        <NavLink to="/" className={css.logo}>
          <svg width="132" height="16" viewBox="0 0 132 16">
            <use href="/icons.svg#icon-logo"></use>
          </svg>
        </NavLink>
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
