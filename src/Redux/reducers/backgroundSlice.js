// backgroundSlice.js
import { createSlice } from '@reduxjs/toolkit';

const backgroundSlice = createSlice({
  name: 'background',
  initialState: {
    color: '',
  },
  reducers: {
    setColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const { setColor } = backgroundSlice.actions;
export default backgroundSlice.reducer;
