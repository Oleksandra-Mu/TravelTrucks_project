import { useOutletContext } from "react-router-dom";
import FeaturesList from "../FeaturesList/FeaturesList";
import css from "./Features.module.scss";
import FormatFeature from "../FormatFeature/FormatFeature";
import clsx from "clsx";

const Features = () => {
  const { camper } = useOutletContext();
  const featureContainerClasses = clsx("minicontainer", css.featureContainer);
  return (
    <div className={featureContainerClasses}>
      <FeaturesList className={css.featuresList} camper={camper} />
      <div>
        <p className={css.title}>Vehicle details</p>
        <hr />
        <ul className={css.vehicleDetails}>
          <li className={css.vehicleDetailsItem}>
            <p>Form</p>
            <FormatFeature text={camper.form} />
          </li>
          <li className={css.vehicleDetailsItem}>
            <p>Length</p>

            <FormatFeature text={camper.length} />
          </li>
          <li className={css.vehicleDetailsItem}>
            <p>Width</p>
            <FormatFeature text={camper.width} />
          </li>
          <li className={css.vehicleDetailsItem}>
            <p>Height</p>
            <FormatFeature text={camper.height} />
          </li>
          <li className={css.vehicleDetailsItem}>
            <p>Tank</p>
            <FormatFeature text={camper.tank} />
          </li>
          <li className={css.vehicleDetailsItem}>
            <p>Consumption</p>
            <FormatFeature text={camper.consumption} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Features;
