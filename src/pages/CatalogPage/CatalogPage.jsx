import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers, fetchFilteredCampers } from "../../redux/campersOps";
import {
  selectError,
  selectFilters,
  selectLoading,
} from "../../redux/selectors";
import CamperList from "../../components/CamperList/CamperList";
import { locationFilter, resetFilters } from "../../redux/filterSlice";
import { selectCamperFilter } from "../../redux/selectors";
import css from "./CatalogPage.module.scss";
import Icons from "../../components/Icons/Icons";
import clsx from "clsx";
import Filters from "../../components/Filters/Filters";
import Btn from "../../components/Btn/Btn";
import { resetCampers } from "../../redux/campersSlice";
import convertFilters from "../../utils/convertFilters";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const filters = useSelector(selectFilters);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const filter = useSelector(selectCamperFilter);
  const handleFilterChange = (evt) => {
    dispatch(locationFilter(evt.target.value));
  };

  const handleClick = () => {
    const convertedFilters = convertFilters(filters);
    console.log("Converted Filters:", convertedFilters);

    dispatch(resetCampers());
    dispatch(fetchFilteredCampers({ filters: convertedFilters }));
  };
  const handleReset = () => {
    dispatch(resetCampers());
    dispatch(resetFilters());
    dispatch(fetchCampers());
  };

  useEffect(() => {
    dispatch(resetFilters());
  }, [dispatch]);

  return (
    <div className={clsx("container", css.catalogContainer)}>
      <div className={css.filterContainer}>
        <label className={css.location}>Location</label>
        <div className={css.searchField}>
          <Icons name="map" width="16" height="16" />
          <input
            className={css.searchInput}
            type="text"
            value={filter}
            onChange={handleFilterChange}
            placeholder="Kyiv, Ukraine"
          />
        </div>
        <p>Filters</p>
        <div className={css.filterEquipment}>
          <p className={css.filterTitle}>Vehicle equipment</p>
          <hr />
          <Filters category="vehicleEquipment" />
        </div>
        <div className={css.filterType}>
          <p className={css.filterTitle}>Vehicle type</p>
          <hr />
          <Filters category="vehicleType" />
        </div>
        <div className={css.filterBtn}>
          <Btn onClick={handleClick} tag="Search" />
          <Btn onClick={handleReset} tag="Reset Filters" variant="load" />
        </div>
      </div>
      {loading && <h2>Loading...</h2>}
      {!loading && error && (
        <h2 className={css.errorMessage}>Sorry, no campers found</h2>
      )}
      <CamperList />
    </div>
  );
};

export default CatalogPage;
