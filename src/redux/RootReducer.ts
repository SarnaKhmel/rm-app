import { combineReducers } from 'redux';
import episodeReducer from "./Episodes/episodeSlice";
import locationReducer from "./Location/locationSlice";


const RootReducer = combineReducers({
    episodes: episodeReducer,
    locations: locationReducer,
});

export default RootReducer;

export type RootState = ReturnType<typeof RootReducer>;

