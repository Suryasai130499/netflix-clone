import { Action } from "@reduxjs/toolkit";

export interface CustomAction extends Action {
  type: string;
  payload?: any;
}
