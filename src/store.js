import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { productApi } from './api/products'
import { postApi } from './api/postApi'

export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        [postApi.reducerPath]: postApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware, postApi.middleware),
})

setupListeners(store.dispatch)