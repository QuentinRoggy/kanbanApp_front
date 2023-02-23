import { createSlice } from '@reduxjs/toolkit';
import { addCard, deleteCard } from '../../middlewares/card';
import { getAll, addList, deleteList } from '../../middlewares/listCard';
import { findArrayIndex } from '../../services/findIndex';


const initialState = {
  list: []
};

export const listCardSlice = createSlice({
  name: 'listCard',
  initialState,
  reducers: {
    clearlistCard: (state) => {
      state.list = [];
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.list = action.payload;
    }),
    builder.addCase(deleteList.fulfilled, (state, action) => {
      state.list = state.list.filter((el => el.id !== action.payload))
    }),
    builder.addCase(addCard.fulfilled, (state, action) => {
      const listIndex = findArrayIndex(state.list, "id", action.payload.list_id);

      state.list[listIndex].cards.push(action.payload);
      state.list[listIndex].cards.sort((c1, c2) => (c1.id < c2.id) ? 1 : (c1.id > c2.id) ? -1 : 0);
    }),
    builder.addCase(deleteCard.fulfilled, (state, action) => {
      const listIndex = findArrayIndex(state.list, "id", action.payload.listId);

      state.list[listIndex].cards = state.list[listIndex].cards.filter((card) => card.id !== action.payload.id)
    }),
    builder.addCase(addList.fulfilled, (state, action) => {
      state.list.push(action.payload);
    })
      
  }

});

export const {
  clearlistCard,
} = listCardSlice.actions;

export default listCardSlice.reducer;
