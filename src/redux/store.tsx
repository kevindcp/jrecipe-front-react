import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user'
import recipesReducer from './recipes'

export const store = configureStore({
    reducer: {
        user: userReducer,
        recipes: recipesReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch