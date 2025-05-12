import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { base_Url, api_key } from "../../Utils";
import { PersonDetails } from "../../Types/types";
import { HttpClient } from "../ApiService";

interface Details {
  person: PersonDetails | null;
  status: "loading" | "success" | "failed";
  error: string | null;
}

const initialState: Details = {
  person: null,
  status: "success",
  error: null,
};

export const fetchPersonDetails = createAsyncThunk(
  "person/fetchPersonDetails",
  async (id: number) => {
    const response = await HttpClient.get(`${base_Url}/person/${id}?api_key=${api_key}`);
    return response.data as PersonDetails;
  }
);

const personDetailsSlice = createSlice({
  name: "personDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPersonDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPersonDetails.fulfilled, (state, action) => {
        state.status = "success";
        state.person = action.payload;
      })
      .addCase(fetchPersonDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong!";
      });
  },
});

export default personDetailsSlice.reducer;
