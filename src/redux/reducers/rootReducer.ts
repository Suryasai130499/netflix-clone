import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import activeReducer from './activeReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  plan: activeReducer,
});

export default rootReducer;
