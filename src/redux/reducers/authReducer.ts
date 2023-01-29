import { createReducer } from '@reduxjs/toolkit';
import { CustomAction } from 'interfaces';
import * as types from '../actionTypes';

interface AuthState {
  user: string;
  password: string;
  step: number;
}

const INITIAL_STATE: AuthState = {
  user: '',
  password: '',
  step: 1,
};

const authReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(types.SET_USER, (state, action: CustomAction) => {
      state.user = action.payload;
    })
    .addCase(types.SET_PASSWORD, (state, action: CustomAction) => {
      state.password = action.payload;
    })
    .addCase(types.SET_STEP, (state, action: CustomAction) => {
      state.step = action.payload;
    })
    .addDefaultCase(() => {});
});

export default authReducer;
