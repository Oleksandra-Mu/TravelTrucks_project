import { useOutletContext } from "react-router-dom";
import Review from "../Review/Review";

const Reviews = () => {
  const { camper } = useOutletContext();
  return (
    <div className="minicontainer">
      <Review reviews={camper.reviews} />
    </div>
  );
};

export default Reviews;
