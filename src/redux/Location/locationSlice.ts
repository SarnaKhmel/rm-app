import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Location } from '../types';

export const fetchLocation = createAsyncThunk<Location[], void>("locations/fetchLocation", async () => {
  const allLocation: Location[] = [];

  const fetchLocationRecursive = async (url: string) => {
    const response = await axios.get(url);
    allLocation.push(...response.data.results);
    if (response.data.info.next) {
      await fetchLocationRecursive(response.data.info.next);
    }
  };

  await fetchLocationRecursive("https://rickandmortyapi.com/api/location");

  return allLocation;
});

interface LocationState {
  locations: Location[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | undefined;
}

const initialState: LocationState = {
  locations: [],
  status: "idle",
  error: undefined,
};



const locationSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocation.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLocation.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.locations = action.payload.map((location) => ({
          ...location,
          locationName: location.name, 
        }));
      })
      .addCase(fetchLocation.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default locationSlice.reducer;
