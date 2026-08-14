import { Provider } from 'react-redux'
import type { ReactNode } from 'react'
import { makeStore } from '@/app/store'
import { CelebrateProvider } from '@/components/celebrate/CelebrateProvider'
import { ThemeProvider } from '@/components/theme/ThemeProvider'

const store = makeStore()

export function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <CelebrateProvider>{children}</CelebrateProvider>
      </ThemeProvider>
    </Provider>
  )
}
