import { configureStore } from "@reduxjs/toolkit";
import { cocktailSlice } from './'

export const store = configureStore({
  reducer: {
    drinks: cocktailSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})