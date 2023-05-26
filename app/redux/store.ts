import { configureStore } from '@reduxjs/toolkit'
import  api  from './api/api'

const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        // Add other reducers here
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})

export default store