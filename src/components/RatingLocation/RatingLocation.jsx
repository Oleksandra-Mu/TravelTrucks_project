import Icons from "../Icons/Icons";
import ReversedLocation from "../ReversedLocation/ReversedLocation";
import css from "./RatingLocation.module.scss";
const RatingLocation = ({ camper }) => {
  return (
    <div className={css.camperDetails}>
      <div className={css.detailsContainer}>
        <Icons
          className={css.icon}
          name="rating-pressed"
          width="16"
          height="16"
        />
        <p>
          {camper.rating}({camper.reviews.length} Reviews)
        </p>
      </div>
      <div className={css.detailsContainer}>
        <Icons className={css.icon} name="map" width="16" height="16" />
        <ReversedLocation location={camper.location} />
      </div>
    </div>
  );
};

export default RatingLocation;
