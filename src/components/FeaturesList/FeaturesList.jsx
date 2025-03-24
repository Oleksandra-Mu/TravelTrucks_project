import FeatureIcons from "../FeatureIcons/FeatureIcons";
import FormatFeature from "../FormatFeature/FormatFeature";
import Icons from "../Icons/Icons";
import css from "./FeaturesList.module.scss";

const FeaturesList = ({ camper }) => {
  const features = Object.entries(camper)
    .filter(([_, value]) => typeof value === "boolean" && value)
    .map(([key]) => key);

  return (
    <div>
      <ul className={css.featuresList}>
        <li className={css.feature}>
          <Icons name={FeatureIcons.transmission} width={20} height={20} />
          <FormatFeature text={camper.transmission} />
        </li>
        <li className={css.feature}>
          <Icons name={FeatureIcons.engine} width={20} height={20} />
          <FormatFeature text={camper.engine} />
        </li>
        {features.length > 0 ? (
          features.map((feature, index) => (
            <li className={css.feature} key={index}>
              <Icons name={FeatureIcons[feature]} width={20} height={20} />
              <FormatFeature text={feature} width={20} height={20} />
            </li>
          ))
        ) : (
          <li>No features available</li>
        )}
      </ul>
    </div>
  );
};
export default FeaturesList;
