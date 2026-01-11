import { configureStore } from '@reduxjs/toolkit'
import contactsReducer from './slices/contactsReducer'
import activeContactReducer from './slices/activeContactReducer'

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        activeContact: activeContactReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store