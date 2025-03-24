const FormatFeature = ({ text }) => {
  const formattedText =
    text === text.toUpperCase()
      ? text
      : text.charAt(0).toUpperCase() + text.slice(1).replace(/([A-Z])/g, " $1");

  return <>{formattedText}</>;
};

export default FormatFeature;
