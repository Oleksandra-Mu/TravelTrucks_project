import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCampers,
  fetchCamperbyID,
  fetchFilteredCampers,
} from "./campersOps";

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.error?.message || "Something went wrong";
};

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    loading: false,
    error: null,
    page: 1,
    totalItems: 0,
    favourites: [],
  },
  reducers: {
    setPage: (state) => {
      state.page += 1;
    },
    resetPage: (state) => {
      state.page = 1;
    },
    resetCampers: (state) => {
      state.items = [];
      state.page = 1;
    },
    toggleFavourite: (state, action) => {
      const camperID = action.payload;

      console.log("toggleFavourite action dispatched", action.payload);
      if (state.favourites.includes(camperID)) {
        state.favourites = state.favourites.filter((id) => id !== camperID);
      } else {
        state.favourites.push(camperID);
      }
      console.log("Updated favourites:", state.favourites);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.loading = false;
        state.error = null;
        state.totalItems = action.payload.total;
      })
      .addCase(fetchCamperbyID.pending, handlePending)
      .addCase(fetchCamperbyID.rejected, handleRejected)
      .addCase(fetchCamperbyID.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.some((item) => item.id === action.payload.id);
      })
      .addCase(fetchFilteredCampers.pending, handlePending)
      .addCase(fetchFilteredCampers.rejected, handleRejected)
      .addCase(fetchFilteredCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.totalItems = action.payload.total;
        state.items = [...state.items, ...action.payload.items];
      });
  },
});

export const { setPage, resetPage, resetCampers, toggleFavourite } =
  campersSlice.actions;
export default campersSlice.reducer;
