const Icons = ({
  name,
  width = 32,
  height = 32,
  isActive = false,
  onClick,
}) => {
  const iconName =
    name === "heart" ? (isActive ? "heart-pressed" : "heart-default") : name;
  return (
    <svg
      className="icon"
      aria-hidden="true"
      width={width}
      height={height}
      onClick={onClick}
    >
      <use xlinkHref={`/icons.svg#icon-${iconName}`} />
    </svg>
  );
};

export default Icons;
