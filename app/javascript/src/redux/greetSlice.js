import React from 'react';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getGreet = createAsyncThunk(
  "greeting/getGreet",
  async () => {
    const response = await fetch('http://127.0.0.1:3000/random_greeting');
    const data = await response.json();
    return data;
  }
)

const initialState = {
  message: 'test',
};

export const greetSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGreet.fulfilled, (state, action) => {
      state.message = action.payload;
    });
  },
});

export default greetSlice.reducer;
