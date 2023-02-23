import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosBaseUrl from "../../axios";

export const getAll = createAsyncThunk(
  'listCard/getAll',
  async () => {
    const res = await axiosBaseUrl.get('lists');
    return res.data;
  }
)

export const addList = createAsyncThunk(
  'listCard/addOne',
  async (_, { getState }) => {
    const state = getState();
    const listToCreate = {
      name: state.global.inputAddModal
    }
    const res = await axiosBaseUrl.post('lists', listToCreate);

    console.log(res.data);

    return res.data;
  }
)

export const deleteList = createAsyncThunk(
  'listCard/delete',
  async (listId) => {
    await axiosBaseUrl.delete(`lists/${listId}`);
    return listId;
  }
)
