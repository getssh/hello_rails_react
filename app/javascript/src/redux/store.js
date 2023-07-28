import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import greetReducer from './greetSlice';

export const store = configureStore({
  reducer: {
    greeting: greetReducer,
  },
});
