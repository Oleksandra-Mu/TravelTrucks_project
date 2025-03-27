import { ScaleLoader } from "react-spinners";

const Loader = () => {
  const loaderCssOverride = {
    textAlign: "center",
    padding: "60px 0",
  };
  return (
    <ScaleLoader
      color="#d84343"
      cssOverride={loaderCssOverride}
      height={40}
      margin={1}
      width={5}
    />
  );
};

export default Loader;
