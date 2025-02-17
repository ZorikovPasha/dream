import { combineReducers } from 'redux';

import categoriesApi from '../api/categoriesApi';
import categoriesSlice from './slices/categoriesSlice';
import authSlice from './slices/authSlice';
import orderSlice from './slices/orderSlice';

export const rootReducer = combineReducers({
  [categoriesApi.reducerPath]: categoriesApi.reducer,
  authSlice: authSlice,
  categoriesSlice,
  orderSlice,
});
