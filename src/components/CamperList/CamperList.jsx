import { useDispatch, useSelector } from "react-redux";
import {
  selectCampers,
  selectFilters,
  selectPage,
  selectTotal,
} from "../../redux/selectors";
import CamperCard from "../CamperCard/CamperCard";
import { useEffect } from "react";
import { fetchCampers, fetchFilteredCampers } from "../../redux/campersOps";
import css from "./CampersList.module.scss";
import Btn from "../Btn/Btn";
import { resetPage, setPage } from "../../redux/campersSlice";
import convertFilters from "../../utils/convertFilters";

const CamperList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const page = useSelector(selectPage);
  const total = useSelector(selectTotal);
  const filters = useSelector(selectFilters);

  const isLastPage = campers.length >= total;

  const LoadMoreShown = !isLastPage && campers.length >= page * 4;
  console.dir(campers);
  useEffect(() => {
    dispatch(fetchCampers());
    dispatch(resetPage());
  }, [dispatch]);

  const handleClick = () => {
    if (!isLastPage) {
      const convertedFilters = convertFilters(filters);
      dispatch(setPage());
      dispatch(
        fetchFilteredCampers({
          filters: convertedFilters,
          page: page + 1,
        })
      );
    } else {
      console.log("You've reached the end");
    }
  };

  return (
    <div>
      <ul className={css.listWrapper}>
        {campers.map((camper) => (
          <li className={css.camperList} key={camper.id}>
            <CamperCard camper={camper} />
          </li>
        ))}
      </ul>
      {LoadMoreShown && (
        <div className={css.btn}>
          <Btn tag="Load more" onClick={handleClick} variant="load" />
        </div>
      )}
    </div>
  );
};

export default CamperList;
