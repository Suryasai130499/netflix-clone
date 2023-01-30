import { Action } from '@reduxjs/toolkit';

export interface Movie {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: string[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface CustomAction extends Action {
  type: string;
  payload?: any;
}

export interface State {
  auth: {
    user: string;
    password: string;
  };
}
