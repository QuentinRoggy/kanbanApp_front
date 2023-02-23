import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosBaseUrl from "../../axios";

export const addCard = createAsyncThunk(
  'card/addOne',
  async ( _, { getState }) => {
    const state = getState();
    const res = await axiosBaseUrl.post('cards', {content: state.global.inputAddModal, list_id: state.global.listId});
    return res.data;
  }
);

export const deleteCard = createAsyncThunk(
  'card/delete',
  async (cardId) => {
    const res = await axiosBaseUrl.delete(`cards/${cardId}`);
    return res.data;
  }
)
