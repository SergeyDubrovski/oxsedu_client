
import regReducer from './reducers/reducer';
import { configureStore } from '@reduxjs/toolkit'




export const store = configureStore({
    reducer: {
        regReducer

    }
  })
