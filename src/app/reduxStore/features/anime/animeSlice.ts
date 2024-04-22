"use client";

import { createSlice } from "@reduxjs/toolkit";

export type initialStateT = {
  ep?: {
    id: string;
    number: number;
    url: string;
  };
  server?: string;
};

const initialState: initialStateT = {};

export const animeSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    setEpisode: (state, action) => {
      state.ep = action.payload;
    },
    setServer: (state, action) => {
      state.server = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setEpisode, setServer } = animeSlice.actions;

export default animeSlice.reducer;
