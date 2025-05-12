import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CastMember } from "../../Types/types";
import { base_Url, api_key } from "../../Utils";
import { HttpClient } from "../ApiService";

interface castcrewMembers {
  cast: CastMember[];
  crew: CastMember[];
  loading: "loading" | "success" | "failed";
  error: string | null;
}

const initialState: castcrewMembers = {
  cast: [],
  crew: [],
  loading: "success",
  error: null,
};

export const FetchingcrewCast = createAsyncThunk(
  "movie/27205/credits",
  async (movieId: number) => {
    const url = `${base_Url}/movie/${movieId}/credits?api_key=${api_key}`;
    const res = await HttpClient.get(url);
    return {
      cast: res.data.cast as CastMember[],
      crew: res.data.crew as CastMember[],
    };
  }
);

const castcrewReducer = createSlice({
  name: "CastandCrew",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchingcrewCast.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(FetchingcrewCast.fulfilled, (state, action) => {
        state.loading = "success";
        state.cast = action.payload.cast;
        state.crew = action.payload.crew;
      })
      .addCase(FetchingcrewCast.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});
export default castcrewReducer.reducer;
