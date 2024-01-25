import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  currentUser: string
}

const initialState: UserState = {
  currentUser: '',
}

export const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
      setCurrentUser: (state, action: PayloadAction<string>) => {
        state.currentUser = action.payload;
      }
    },
});

export const { setCurrentUser } = userSlice.actions;
export const userReducer = userSlice.reducer;