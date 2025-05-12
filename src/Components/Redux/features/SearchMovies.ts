import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { base_Url } from "../../Utils";
import { api_key } from "../../Utils";
import { Movie, PersonDetails } from "../../Types/types";
import { HttpClient } from "../ApiService";

interface moviesState {
  movies: Movie[];
  person: PersonDetails[] | null;
  status: "loading" | "success" | "failed";
  error: string | null;
}

const initialState: moviesState = {
  movies: [],
  person: [],
  status: "success",
  error: null,
};

export const SearchMovies = createAsyncThunk(
  "movie/search?api_key",
  async (query: string) => {
    const [moviesRes, personsRes] = await Promise.all([
      HttpClient.get(
        `${base_Url}/search/movie?api_key=${api_key}&query=${query}`
      ),
      HttpClient.get(
        `${base_Url}/search/person?api_key=${api_key}&query=${query}`
      ),
    ]);

    return {
      movies: moviesRes.data.results as Movie[],
      person: personsRes.data.results as PersonDetails[],
    };
  }
);

const FetchingTrendingMovies = createSlice({
  name: "Searchingmovies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(SearchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(SearchMovies.fulfilled, (state, action) => {
        (state.status = "success"), (state.movies = action.payload.movies);
        state.person = action.payload.person;
      })
      .addCase(SearchMovies.rejected, (state, action) => {
        (state.status = "failed"),
          (state.error = action.error.message = "something went wrong!");
      });
  },
});

export default FetchingTrendingMovies.reducer;
