import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    vehicleType: {
      alcove: false,
      fullyIntegrated: false,
      panelTruck: false,
    },
    vehicleEquipment: {
      AC: false,
      automatic: false,
      bathroom: false,
      gas: false,
      kitchen: false,
      microwave: false,
      radio: false,
      refrigerator: false,
      TV: false,
      water: false,
    },
    location: "",
  },
  reducers: {
    locationFilter(state, action) {
      state.location = action.payload;
    },
    toggleFilter: (state, action) => {
      const { category, key } = action.payload;

      if (category === "vehicleType") {
        Object.keys(state.vehicleType).forEach((filterKey) => {
          state.vehicleType[filterKey] = filterKey === key;
        });
      } else {
        state[category][key] = !state[category][key];
      }
    },
    resetFilters: (state) => {
      Object.keys(state.vehicleType).forEach(
        (key) => (state.vehicleType[key] = false)
      );
      Object.keys(state.vehicleEquipment).forEach(
        (key) => (state.vehicleEquipment[key] = false)
      );
      state.location = "";
    },
  },
});

export const { locationFilter, toggleFilter, resetFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
