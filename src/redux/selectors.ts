import { RootState } from './RootReducer'; 

export const selectEpisodes = (state: RootState) => state.episodes.episodes;
export const selectLocation = (state: RootState) => state.locations.locations;