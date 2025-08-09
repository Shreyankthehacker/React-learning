import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: ['Burger'],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clear: (state) => {
      state.items = ['Burger'];
    },
  },
});

export const { addItem, removeItem, clear } = cartSlice.actions;
export default cartSlice.reducer;
