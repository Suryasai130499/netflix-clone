import { createAction } from '@reduxjs/toolkit';
import * as types from '../actionTypes';

export const setPlan = createAction<number>(types.SET_PLAN);
