import RatingIcon from "../RatingIcon/RatingIcon";
import css from "./Review.module.scss";
const Review = ({ reviews }) => {
  return (
    <div className={css.reviewList}>
      {reviews.map((review, index) => (
        <li key={index}>
          <div className={css.reviewTop}>
            <p className={css.logo}>{review.reviewer_name.charAt(0)}</p>
            <div className={css.nameRating}>
              <p>{review.reviewer_name}</p>
              <RatingIcon rating={review.reviewer_rating} />
            </div>
          </div>
          <p>{review.comment}</p>
        </li>
      ))}
    </div>
  );
};

export default Review;
