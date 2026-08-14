import { Provider } from 'react-redux'
import type { ReactNode } from 'react'
import { makeStore } from '@/app/store'
import { ThemeProvider } from '@/components/theme/ThemeProvider'

const store = makeStore()

export function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  )
}
