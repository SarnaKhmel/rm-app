import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Result } from './Location';

export const fetchLocation = createAsyncThunk("episodes/fetchEpisodes", async () => {
  const allLocation: Result[] = [];

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
  locations: Result[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | undefined;
}

const initialState: LocationState = {
  locations: [],
  status: "idle",
  error: undefined,
};

const locationSlice = createSlice({
  name: "episodes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocation.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLocation.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.locations = action.payload;
      })
      .addCase(fetchLocation.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default locationSlice.reducer;
