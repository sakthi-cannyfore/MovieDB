import { configureStore } from "@reduxjs/toolkit";
import  fetchPopularMovies from "../features/FetchingPopularMovies";
import FetchingTrendingMovies from "../features/FetchingTrendingMovies";
import  SearchMovies  from "../features/SearchMovies";
import FetchingcrewCast from "../features/CastandCrewDetails";
import  fetchPersonDetails  from "../features/FetchPersonDetails";

const store = configureStore({
    reducer:{
        popularMovies: fetchPopularMovies,
        trendingMovies:FetchingTrendingMovies,
        searchMovies:SearchMovies,
        castCrew:FetchingcrewCast,
        personDetails:fetchPersonDetails
    },

});

export type RootState = ReturnType<typeof store.getState>
export type Appdispatch = typeof store.dispatch

export default store