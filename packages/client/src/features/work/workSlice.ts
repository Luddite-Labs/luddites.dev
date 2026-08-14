import { createSlice } from '@reduxjs/toolkit'
import { getFeaturedWork, workCases } from '@/features/work/workData'
import type { WorkCase } from '@/types/content'

type WorkState = {
  items: WorkCase[]
}

const initialState: WorkState = {
  items: workCases,
}

const workSlice = createSlice({
  name: 'work',
  initialState,
  reducers: {},
})

export const selectWorkItems = (state: { work: WorkState }) => state.work.items
export const selectFeaturedWork = (_state: { work: WorkState }) =>
  getFeaturedWork()
export default workSlice.reducer
