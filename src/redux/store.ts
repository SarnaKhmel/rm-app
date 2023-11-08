import { configureStore } from '@reduxjs/toolkit';
import RootReducer from './RootReducer';
import thunk from "redux-thunk";

const store = configureStore({
  reducer: RootReducer,
  middleware: [thunk],
});

export default store;