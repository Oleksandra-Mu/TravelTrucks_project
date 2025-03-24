import { createSelector } from "@reduxjs/toolkit";

export const selectLoading = (state) => state.campers.loading;
export const selectError = (state) => state.campers.error;
export const selectCampers = (state) => state.campers.items;
export const selectTotal = (state) => state.campers.totalItems;
export const selectCamperFilter = (state) => state.filters.location;
export const selectFilters = (state) => state.filters;
export const selectCamperId = (_, id) => id;
export const selectPage = (state) => state.campers.page;
export const selectCampersCategory = (state, category) =>
  state.filters[category];

export const selectFavourites = (state) => state.campers.favourites;

export const selectFilteredCampers = createSelector(
  [selectCampers, selectFilters],
  (campers, filters) => {
    return campers.filter((camper) => {
      const matchesLocation = camper.location
        ?.toLowerCase()
        .includes(filters.location.toLowerCase());
      const selectedVehicleType = Object.keys(filters.vehicleType).find(
        (key) => filters.vehicleType[key]
      );
      const matchesVehicleType = selectedVehicleType
        ? camper.vehicleType === selectedVehicleType
        : true;

      const matchesEquipment = Object.keys(filters.vehicleEquipment).every(
        (key) =>
          !filters.vehicleEquipment[key] ||
          (Array.isArray(camper.equipment) && camper.equipment.includes(key))
      );
      return matchesEquipment && matchesLocation && matchesVehicleType;
    });
  }
);
export const selectCamperByID = createSelector(
  [selectCampers, selectCamperId],
  (items, id) => {
    return items.find((item) => item.id === id);
  }
);
