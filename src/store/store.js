import { configureStore } from '@reduxjs/toolkit';

import lisCardReducer from '../features/listCard/listCardSlice';
import globalReducer from '../features/global/globalSlice';

const store = configureStore({
  reducer: {
    global: globalReducer,
    listCards: lisCardReducer,
  },

});

export default store;
