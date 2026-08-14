import { createSlice } from '@reduxjs/toolkit'
import { workCases } from '@/features/work/workData'
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
export const selectFeaturedWork = (state: { work: WorkState }) =>
  state.work.items.slice(0, 2)
export default workSlice.reducer
