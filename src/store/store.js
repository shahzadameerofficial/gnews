import { configureStore } from '@reduxjs/toolkit'
import formSlice from './slices/FormsSlice'

export const store = configureStore({
  reducer: {
    forms: formSlice
  },
})