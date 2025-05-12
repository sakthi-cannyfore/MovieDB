import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { base_Url, api_key } from "../../Utils";
import { Movie } from "../../Types/types";
import { Genre } from "../../Types/types";
import { HttpClient } from "../ApiService";

interface moviesState {
  movies: Movie[];
  selectedMovie: Movie| null;
  status: "loading" | "success" | "failed";
  error: string | null;
  genres:Genre[]|null
}

const initialState: moviesState = {
  movies: [],
  selectedMovie: null,
  status: "success",
  error: null,
  genres:null
};

export const fetchPopularMovies = createAsyncThunk(
  "movies/fetchPopular",
  async (type: "movie" | "tv") => {
    const response = await HttpClient.get(
      `${base_Url}/${type}/popular?api_key=${api_key}`
    );
    return response.data.results as Movie[];
  }
);
//https://api.themoviedb.org/3/movie/27205/videos?api_key=0c2efce2a23fcafc5658862d35fc6291

export const fetchPopularMoviesById = createAsyncThunk(
  "movies/fetchById",
  async (movieId: number) => {
    const response = await HttpClient.get(
      `${base_Url}/movie/${movieId}?api_key=${api_key}`
    );
    return response.data as Movie;
  }
);

const fetchPopularMovieSlice = createSlice({
  name: "popularmovies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.status = "success";
        state.movies = action.payload;
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong";
      })

      .addCase(fetchPopularMoviesById.pending, (state) => {
        state.status = "loading";
        state.selectedMovie = null;
      })
      .addCase(fetchPopularMoviesById.fulfilled, (state, action) => {
        state.status = "success";
        state.selectedMovie = action.payload;
      })
      .addCase(fetchPopularMoviesById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});

export default fetchPopularMovieSlice.reducer;
