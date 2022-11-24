import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from "@reduxjs/toolkit/query";

import categorySlice from './features/categories/php/categorySlice';
import topicSlice from './features/apps/topic/php/topicSlice';
import { topicApi } from './features/apps/topic/php/topicApi';
import { categoryApi } from './features/categories/php/categoryApi';

const reducer = {
  categories: categorySlice,
  topics: topicSlice,
  [topicApi.reducerPath]: topicApi.reducer,
  [categoryApi.reducerPath]: categoryApi.reducer,
}

export const store = configureStore({
  reducer: reducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat (topicApi.middleware, categoryApi. middleware)
});

setupListeners(store.dispatch);