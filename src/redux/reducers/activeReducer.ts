import { createReducer } from '@reduxjs/toolkit';
import { CustomAction } from 'interfaces';
import * as types from '../actionTypes';

const INITIAL_STATE = {
  plan: 1,
};

const activeReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(types.SET_PLAN, (state, action: CustomAction) => {
      state.plan = action.payload;
    })
    .addDefaultCase(() => {});
});

export default activeReducer;
