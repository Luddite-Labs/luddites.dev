import { Provider } from 'react-redux'
import type { ReactNode } from 'react'
import { makeStore } from '@/app/store'

const store = makeStore()

export function Providers({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>
}
