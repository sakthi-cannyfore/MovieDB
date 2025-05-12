import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { base_Url } from "../../Utils";
import { api_key } from "../../Utils";
import { Movie } from "../../Types/types";
import { HttpClient } from "../ApiService";

interface moviesState {
  moviesTrending: Movie[];
  status: "loading" | "success" | "failed";
  error: string | null;
}

const initialState: moviesState = {
    moviesTrending: [],
  status: "success",
  error: null,
};

export const fetchTrendingMovies = createAsyncThunk(
  "movie/trending?api_key",
  async (type: "day" | "week") => {
    const response = await HttpClient.get(
      `${base_Url}/trending/movie/${type}?api_key=${api_key}`
    );

    return response.data.results as Movie[];
  }
);

const FetchingTrendingMovies = createSlice({
  name: "Trendingmovies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendingMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
        (state.status = "success"), (state.moviesTrending = action.payload);
      })
      .addCase(fetchTrendingMovies.rejected, (state, action) => {
        (state.status = "failed"),
          (state.error = action.error.message = "something went wrong!");
      });
  },
});

export default FetchingTrendingMovies.reducer;
