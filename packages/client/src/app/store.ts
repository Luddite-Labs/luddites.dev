import { configureStore } from '@reduxjs/toolkit'
import { contactApi } from '@/features/contact/contactApi'
import contactReducer from '@/features/contact/contactSlice'
import uiReducer from '@/features/ui/uiSlice'
import workReducer from '@/features/work/workSlice'

export function makeStore() {
  return configureStore({
    reducer: {
      ui: uiReducer,
      contact: contactReducer,
      work: workReducer,
      [contactApi.reducerPath]: contactApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(contactApi.middleware),
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
