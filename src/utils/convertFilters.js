const convertFilters = (filters) => {
  const result = {};

  // Convert vehicleType to `form`
  const vehicleTypeKey = Object.keys(filters.vehicleType).find(
    (key) => filters.vehicleType[key]
  );
  if (vehicleTypeKey) {
    result.form = vehicleTypeKey;
  }

  // Handle transmission (automatic/manual)
  if (filters.vehicleEquipment?.automatic) {
    result.transmission = "automatic";
  }

  // Convert vehicleEquipment
  Object.keys(filters.vehicleEquipment || {}).forEach((key) => {
    if (filters.vehicleEquipment[key] && key !== "automatic") {
      result[key] = true;
    }
  });

  // Add location if provided
  if (filters.location?.trim()) {
    result.location = filters.location.trim();
  }

  console.log("result", result);

  return result;
};

export default convertFilters;
