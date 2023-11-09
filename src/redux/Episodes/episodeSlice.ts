import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Episodes } from '../types';

export const fetchEpisodes = createAsyncThunk<Episodes[], void>(
  "episodes/fetchEpisodes",
  async () => {
    const allEpisodes: Episodes[] = [];

    const fetchEpisodesRecursive = async (url: string) => {
      const response = await axios.get(url);
      allEpisodes.push(...response.data.results);

      if (response.data.info.next) {
        await fetchEpisodesRecursive(response.data.info.next);
      }
    };

    await fetchEpisodesRecursive("https://rickandmortyapi.com/api/episode");

    return allEpisodes;
  }
);



interface EpisodeState {
  episodes: Episodes[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | undefined;
}

const initialState: EpisodeState = {
  episodes: [],
  status: "idle",
  error: undefined,
};

const episodeSlice = createSlice({
  name: "episodes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEpisodes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEpisodes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.episodes = action.payload.map((episode) => ({
          ...episode,
          episodeName: episode.name, 
        }));
      })
      .addCase(fetchEpisodes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default episodeSlice.reducer;
