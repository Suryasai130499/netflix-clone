import { Action } from '@reduxjs/toolkit';

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
