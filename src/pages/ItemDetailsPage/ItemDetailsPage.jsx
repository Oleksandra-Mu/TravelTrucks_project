import { useEffect, useRef } from "react";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { fetchCamperbyID } from "../../redux/campersOps";
import Btn from "../../components/Btn/Btn";
import { useDispatch, useSelector } from "react-redux";
import { selectCamperByID } from "../../redux/selectors";
import css from "./ItemsDetailsPage.module.scss";
import RatingLocation from "../../components/RatingLocation/RatingLocation";
import CamperGallery from "../../components/CamperGallery/CamperGallery";
import clsx from "clsx";
import BookingForm from "../../components/BookingForm/BookingForm";

const ItemDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camperDetails = useSelector((state) => selectCamperByID(state, id));
  const location = useLocation();
  const navigate = useNavigate();

  const backLink = useRef(location.state ?? "/catalog");

  useEffect(() => {
    dispatch(fetchCamperbyID(id));
  }, [dispatch, id]);

  const handleBack = () => {
    navigate(backLink.current);
  };
  const isActive = (path) => location.pathname === `/catalog/${id}/${path}`;

  return (
    <div className="container">
      <Btn variant="back" tag="Go back" onClick={handleBack} />
      {camperDetails && (
        <>
          <div>
            <p className={css.title}>{camperDetails.name}</p>
            <RatingLocation camper={camperDetails} />
            <p className={css.camperPrice}>
              {"\u20AC"}
              {camperDetails.price}.00
            </p>
            <CamperGallery camper={camperDetails} />
            <p className={css.description}>{camperDetails.description}</p>
            <ul className={css.infoList}>
              <li className={css.link}>
                <Link
                  className={clsx(css.link, {
                    [css.active]: isActive("features"),
                  })}
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="features"
                >
                  Features
                </Link>
              </li>
              <li className={css.link}>
                <Link
                  className={clsx(css.link, {
                    [css.active]: isActive("reviews"),
                  })}
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="reviews"
                >
                  Reviews
                </Link>
              </li>
            </ul>
            <hr />
            <div className={css.pageLayout}>
              <div className={css.featuresWrapper}>
                <Outlet context={{ camper: camperDetails }} />
              </div>

              <div className={css.bookingWrapper}>
                <BookingForm />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ItemDetailsPage;
