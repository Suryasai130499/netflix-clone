import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import activeReducer from './activeReducer';
import homeReducer from './homeReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  plan: activeReducer,
  home: homeReducer,
});

export default rootReducer;
