import { createAction } from '@reduxjs/toolkit';

import * as types from '../actionTypes';

export const setUser = createAction<string>(types.SET_USER);

export const setPassword = createAction<string>(types.SET_PASSWORD);

export const setStep = createAction<number>(types.SET_STEP);
