import { NavLink } from "react-router-dom";
import css from "./Navigation.module.scss";
import clsx from "clsx";
import Icons from "../Icons/Icons";

const Navigation = () => {
  const getActiveClass = ({ isActive }) => {
    return clsx(css.navLink, isActive && css.active);
  };
  return (
    <header className={css.wrapper}>
      <NavLink to="/" className={css.logo}>
        <Icons name={"logo"} width={132} height={16} />
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
    </header>
  );
};

export default Navigation;
