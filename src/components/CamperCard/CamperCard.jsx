import css from "./CampersCard.module.scss";
import Icons from "../Icons/Icons";
import FeaturesList from "../FeaturesList/FeaturesList";
import Btn from "../Btn/Btn";
import { useNavigate } from "react-router-dom";
import RatingLocation from "../RatingLocation/RatingLocation";
import CamperGallery from "../CamperGallery/CamperGallery";
import { useDispatch, useSelector } from "react-redux";
import { selectFavourites } from "../../redux/selectors";
import { toggleFavourite } from "../../redux/campersSlice";

const CamperCard = ({ camper }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    navigate(`${camper.id}`);
  };
  const firstImageCamper = { ...camper, gallery: camper.gallery.slice(0, 1) };
  const isFavorite = useSelector((state) =>
    selectFavourites(state).includes(camper.id)
  );

  const handleFavouriteClick = () => {
    console.log("handleFavouriteClick called", camper.id);
    dispatch(toggleFavourite(camper.id));
  };

  return (
    <div className={css.wrapper}>
      <CamperGallery camper={firstImageCamper} />
      <div className={css.camperInfo}>
        <div className={css.titleContainer}>
          <div className={css.camperTitle}>
            <p className={css.camperName}>{camper.name}</p>
            <p className={css.camperPrice}>
              {"\u20AC"}
              {camper.price}.00
            </p>
          </div>
          <Icons
            className={css.heart}
            name="heart"
            width="24"
            height="28"
            onClick={handleFavouriteClick}
            isActive={isFavorite}
          />
        </div>
        <RatingLocation camper={camper} />
        <p className={css.description}>{camper.description}</p>
        <FeaturesList className={css.featuresList} camper={camper} />
        <Btn variant="primary" tag="Show more" onClick={handleClick} />
      </div>
    </div>
  );
};

export default CamperCard;
