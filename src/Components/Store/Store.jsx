import { configureStore } from "@reduxjs/toolkit";
import { movieDetailsReducer } from '../Store/Reducer';
import { movieReducer } from './Reducer';

export const Store = configureStore({
  reducer: {
    movies: movieReducer,
    movieDetails: movieDetailsReducer,
  },
});
export default Store;