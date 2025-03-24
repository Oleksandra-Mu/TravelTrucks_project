import { Button } from "@mui/material";
import css from "./Btn.module.scss";

const mainRed = "#E44848";
const hoverRed = "#D84343";

const Btn = ({ tag, onClick, variant = "primary" }) => {
  const styles = {
    primary: {
      color: "white",
      borderColor: mainRed,
      backgroundColor: mainRed,
      borderRadius: "200px",
      minWidth: "166px",
      height: "56px",
      margin: "0px auto",
      "&:hover": {
        backgroundColor: hoverRed,
        borderColor: hoverRed,
      },
    },
    load: {
      color: "#101828",
      borderColor: "#DADDE1",
      backgroundColor: "transparent",
      borderRadius: "200px",
      minWidth: "166px",
      height: "56px",
      margin: "0px auto",
      "&:hover": {
        borderColor: hoverRed,
      },
    },
    back: {
      color: "#101828",
      textDecoration: "underline",
      backgroundColor: "transparent",
      borderColor: "white",
      minWidth: "100px",
      height: "30px",
      margin: "0px",
      padding: "0px",
      "&:hover": {
        color: hoverRed,
        textDecoration: "underline",
      },
    },
  };

  return (
    <div className={css.btn}>
      <Button
        sx={{
          borderColor: mainRed,
          backgroundColor: mainRed,
          textTransform: "none",
          ...styles[variant],
        }}
        type="submit"
        variant="outlined"
        onClick={onClick}
      >
        {tag}
      </Button>
    </div>
  );
};

export default Btn;
