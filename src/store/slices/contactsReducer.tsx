import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type {contactType} from "@src/types/contact"

// Define the initial state using that type
const initialState: contactType[] = [
    { firstName: "Daniel", lastName: "Stephany", email: "daniel@d.com" },
    { firstName: "Matt", lastName: "Stephany", email: "Matt.stephany@d.com" },
]

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: (state, action: PayloadAction<contactType>) => {
            return [...state, action.payload]
        }
    },
})

export const { addContact } = contactsSlice.actions

export default contactsSlice.reducer