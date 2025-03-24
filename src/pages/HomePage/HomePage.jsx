import Btn from "/src/components/Btn/Btn";
import css from "./HomePage.module.scss";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/catalog");
  };
  return (
    <div className={css.heroImage}>
      <h1>Campers of your dreams</h1>
      <h2>You can find everything you want in our catalog</h2>
      <Btn variant="primary" tag="View now" onClick={handleClick} />
    </div>
  );
};

export default HomePage;
