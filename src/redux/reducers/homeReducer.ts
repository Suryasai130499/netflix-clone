import { createReducer } from '@reduxjs/toolkit';
import { CustomAction, Movie } from 'interfaces';
import * as types from '../actionTypes';

interface StateType {
  banner: Movie;
  trending: Movie[];
  topRated: Movie[];
  netflixOriginals: Movie[];
  actionMovies: Movie[];
  comedy: Movie[];
  horror: Movie[];
  romance: Movie[];
  documentaries: Movie[];
}

const INITIAL_STATE: StateType = {
  banner: {
    backdrop_path: '',
    first_air_date: '',
    genre_ids: [],
    id: 0,
    name: '',
    origin_country: [],
    original_language: '',
    original_name: '',
    overview: '',
    popularity: 0,
    poster_path: '',
    vote_average: 0,
    vote_count: 0,
  },
  trending: [],
  topRated: [],
  netflixOriginals: [],
  actionMovies: [],
  comedy: [],
  horror: [],
  romance: [],
  documentaries: [],
};

const homeReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(types.SET_BANNER, (state, action: CustomAction) => {
      state.banner = action.payload;
    })
    .addCase(types.SET_TRENDING, (state, action: CustomAction) => {
      state.trending = action.payload;
    })
    .addCase(types.SET_TOP_RATED, (state, action: CustomAction) => {
      state.topRated = action.payload;
    })
    .addCase(types.SET_NETFLIX_ORIGINALS, (state, action: CustomAction) => {
      state.netflixOriginals = action.payload;
    })
    .addCase(types.SET_ACTION_MOVIES, (state, action: CustomAction) => {
      state.actionMovies = action.payload;
    })
    .addCase(types.SET_COMEDY_MOVIES, (state, action: CustomAction) => {
      state.comedy = action.payload;
    })
    .addCase(types.SET_HORROR_MOVIES, (state, action: CustomAction) => {
      state.horror = action.payload;
    })
    .addCase(types.SET_ROMANCE_MOVIES, (state, action: CustomAction) => {
      state.romance = action.payload;
    })
    .addCase(types.SET_DOCUMENTARIES, (state, action: CustomAction) => {
      state.documentaries = action.payload;
    })
    .addDefaultCase(() => {});
});

export default homeReducer;
