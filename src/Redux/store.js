import { configureStore } from '@reduxjs/toolkit';

import backgroundReducer from './reducers/backgroundSlice'
const store = configureStore({
  reducer: {
    background: backgroundReducer,
  },
});

export { store, backgroundReducer };