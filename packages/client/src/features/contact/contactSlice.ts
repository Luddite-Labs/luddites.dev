import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { contact } from '@/content'

type ContactUiState = {
  lastSubmittedAt: string | null
  statusMessage: string | null
}

const initialState: ContactUiState = {
  lastSubmittedAt: null,
  statusMessage: null,
}

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    markSubmitted(state, action: PayloadAction<string>) {
      state.lastSubmittedAt = action.payload
      state.statusMessage = contact.form.successMessage
    },
    clearStatus(state) {
      state.statusMessage = null
    },
  },
})

export const { markSubmitted, clearStatus } = contactSlice.actions
export const selectContactStatus = (state: { contact: ContactUiState }) =>
  state.contact.statusMessage
export default contactSlice.reducer
