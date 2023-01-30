import { createAction } from '@reduxjs/toolkit';
import * as types from '../actionTypes';

export const setBanner = createAction(types.SET_BANNER);
export const setTrending = createAction(types.SET_TRENDING);
export const setTopRated = createAction(types.SET_TOP_RATED);
export const setNetflixOriginals = createAction(types.SET_NETFLIX_ORIGINALS);
export const setActionMovies = createAction(types.SET_ACTION_MOVIES);
export const setComedy = createAction(types.SET_COMEDY_MOVIES);
export const setHorror = createAction(types.SET_HORROR_MOVIES);
export const setRomance = createAction(types.SET_ROMANCE_MOVIES);
export const setDocumentaries = createAction(types.SET_DOCUMENTARIES);
