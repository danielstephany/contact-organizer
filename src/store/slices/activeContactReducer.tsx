import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { contactType } from "@src/types/contact"

// Define the initial state using that type
const initialState = null as contactType | null

export const activeContactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        updateContact: (state, action: PayloadAction<contactType>) => {
            state = {...action.payload}
        }
    },
})

export const { updateContact } = activeContactSlice.actions

export default activeContactSlice.reducer