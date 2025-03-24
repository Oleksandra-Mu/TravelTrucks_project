import { useDispatch, useSelector } from "react-redux";
import FeatureIcons from "../FeatureIcons/FeatureIcons";
import Icons from "../Icons/Icons";
import css from "./Filters.module.scss";
import { selectCampersCategory } from "../../redux/selectors";
import { toggleFilter } from "../../redux/filterSlice";
import FormatFeature from "../FormatFeature/FormatFeature";
import clsx from "clsx";

const Filters = ({ category }) => {
  const filters =
    useSelector((state) => selectCampersCategory(state, category)) || {};
  const dispatch = useDispatch();

  const handleClick = (key) => {
    dispatch(toggleFilter({ category, key }));
  };

  return (
    <>
      <ul className={css.filters}>
        {Object.keys(filters).map((filter) => {
          const isActive = filters[filter];
          return (
            <li
              className={clsx(css.filterItem, isActive && css.active)}
              key={filter}
              onClick={() => handleClick(filter)}
            >
              <Icons name={FeatureIcons[filter]} width="32" height="32" />
              <p>
                <FormatFeature text={filter} />
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Filters;
