import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from '@/app/App'
import '@/theme/index.css'

export const createRoot = ViteReactSSG(
  { routes },
  ({ isClient, initialState }) => {
    if (import.meta.env.DEV && isClient) {
      console.info('[ssg] client ready', { hasState: Boolean(initialState) })
    }
  },
)
