import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async ({ limit = 4, page = 1 } = {}, thunkAPI) => {
    try {
      const queryParams = new URLSearchParams({
        limit,
        page,
      }).toString();
      const response = await axios.get(`/campers?${queryParams}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperbyID = createAsyncThunk(
  "campers/fetchCamperbyID",
  async (camperID, thunkAPI) => {
    try {
      const response = await axios.get(`campers/${camperID}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFilteredCampers = createAsyncThunk(
  "filters/fetchFilteredCampers",
  async ({ filters = {}, limit = 4, page = 1 } = {}, thunkAPI) => {
    try {
      const queryParams = new URLSearchParams({
        ...filters,
        limit,
        page,
      }).toString();
      const response = await axios.get(`/campers?${queryParams}`);
      if (response.data.length === 0) {
        return thunkAPI.rejectWithValue(
          "No campers found for the selected filters."
        );
      }

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
