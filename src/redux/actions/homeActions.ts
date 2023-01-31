import { createAction } from '@reduxjs/toolkit';
import { Movie } from 'interfaces';
import * as types from '../actionTypes';

export const setBanner = createAction<Movie>(types.SET_BANNER);
export const setTrending = createAction<Movie[]>(types.SET_TRENDING);
export const setTopRated = createAction<Movie[]>(types.SET_TOP_RATED);
export const setNetflixOriginals = createAction<Movie[]>(
  types.SET_NETFLIX_ORIGINALS
);
export const setActionMovies = createAction<Movie[]>(types.SET_ACTION_MOVIES);
export const setComedy = createAction<Movie[]>(types.SET_COMEDY_MOVIES);
export const setHorror = createAction<Movie[]>(types.SET_HORROR_MOVIES);
export const setRomance = createAction<Movie[]>(types.SET_ROMANCE_MOVIES);
export const setDocumentaries = createAction<Movie[]>(types.SET_DOCUMENTARIES);
