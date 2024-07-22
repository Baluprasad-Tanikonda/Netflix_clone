/** @format */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const API_KEY = "f8b05ffeae56ab29b4425c66b59a57c0";
const AUTH_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGIwNWZmZWFlNTZhYjI5YjQ0MjVjNjZiNTlhNTdjMCIsIm5iOiJjNjY3NjgwOTU0ODViYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6GFyCITc48tzBIeumAy9UotI2tvPdvLqbmvTWTla1AI";

// Action to fetch movies by category
export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (category = "now_playing") => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&language=en-US&page=1`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
      }
    );
    return response.data.results;
  }
);

// Action to fetch movie details by ID
export const fetchMovieDetails = createAsyncThunk(
  "movieDetails/fetchMovieDetails",
  async (id) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
      }
    );
    return response.data.results[0];
  }
);

// Movie slice
const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Movie details slice
const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    movieDetails: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movieDetails = action.payload;
      })
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const movieReducer = movieSlice.reducer;
export const movieDetailsReducer = movieDetailsSlice.reducer;
