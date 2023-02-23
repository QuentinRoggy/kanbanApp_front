import { createSlice } from '@reduxjs/toolkit';
import { addCard } from '../../middlewares/card';
import { addList } from '../../middlewares/listCard';

const initialState = {
  addModalOpen: false,
  inputAddModal: '',
  listId: null,
  addType: '',
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    openAddModal: (state, action) => {
      action.payload ? state.listId = action.payload : state.listId = 0;
      state.addModalOpen = true;
    },
    closeAddModal: (state) => {
      state.addModalOpen = false;
    },
    updateInputAddModal: (state, action) => {
      state.inputAddModal = action.payload;
    },
    setAddType: (state, action) => {
      state.addType = action.payload
    }
  },

  extraReducers: (builder) => {
    builder.addCase(addCard.fulfilled, (state, action) => {
      state.inputAddModal = '';
      state.listId = 0;
    }),
    builder.addCase(addList.fulfilled, (state, action) => {
      state.inputAddModal = '';
      state.addType = '';
    })
  }
});

export const {
  openAddModal,closeAddModal,updateInputAddModal, setAddType
} = globalSlice.actions;

export default globalSlice.reducer;
