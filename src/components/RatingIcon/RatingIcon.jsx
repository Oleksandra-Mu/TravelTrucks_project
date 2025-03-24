import Icons from "../Icons/Icons";

const RatingIcon = ({ rating }) => {
  const totalStars = 5;

  return (
    <div style={{ display: "flex", gap: "4px" }}>
      {[...Array(totalStars)].map((_, index) => (
        <Icons
          key={index}
          name={index < rating ? "rating-pressed" : "rating-default"}
          width={16}
          height={16}
        />
      ))}
    </div>
  );
};

export default RatingIcon;
