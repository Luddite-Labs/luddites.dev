import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

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
      state.statusMessage = 'Message received. We will reply within two business days.'
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
