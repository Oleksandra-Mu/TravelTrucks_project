const ReversedLocation = ({ location }) => {
  const reversed = location.split(", ").reverse().join(", ");
  return <>{reversed}</>;
};

export default ReversedLocation;
