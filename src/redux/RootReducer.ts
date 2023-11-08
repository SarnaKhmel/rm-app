import { combineReducers } from 'redux';
import episodeReducer from "./Episodes/episodeSlice";


const RootReducer = combineReducers({
    episodes: episodeReducer,
   
});

export default RootReducer;

export type RootState = ReturnType<typeof RootReducer>;

