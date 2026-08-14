import {
  Component,
  createContext,
  lazy,
  Suspense,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ComponentType,
  type ReactNode,
} from 'react'
import { createPortal } from 'react-dom'
import { useReducedMotion } from 'framer-motion'
import {
  createStarBurstAnimation,
  getCelebratePalette,
} from '@/lib/starBurstLottie'

type LottieProps = {
  animationData: object
  loop?: boolean
  autoplay?: boolean
  onComplete?: () => void
  className?: string
}

function resolveLottieExport(mod: {
  default?: unknown
}): ComponentType<LottieProps> {
  const exported = mod.default
  if (typeof exported === 'function') {
    return exported as ComponentType<LottieProps>
  }
  if (
    exported &&
    typeof exported === 'object' &&
    'default' in exported &&
    typeof (exported as { default: unknown }).default === 'function'
  ) {
    return (exported as { default: ComponentType<LottieProps> }).default
  }
  throw new Error('Unable to resolve lottie-react component export')
}

const Lottie = lazy(() =>
  import('lottie-react').then((mod) => ({
    default: resolveLottieExport(mod),
  })),
)

type Burst = {
  id: string
  x: number
  y: number
  animationData: ReturnType<typeof createStarBurstAnimation>
}

type CelebrateContextValue = {
  celebrateAt: (x: number, y: number) => void
  celebrateFromEvent: (event: {
    currentTarget: EventTarget & Element
  }) => void
}

const CelebrateContext = createContext<CelebrateContextValue | null>(null)

class BurstErrorBoundary extends Component<
  { children: ReactNode; onError: () => void },
  { failed: boolean }
> {
  state = { failed: false }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  componentDidCatch() {
    this.props.onError()
  }

  render() {
    if (this.state.failed) return null
    return this.props.children
  }
}

function BurstPlayer({
  burst,
  onDone,
}: {
  burst: Burst
  onDone: (id: string) => void
}) {
  return (
    <div
      className="absolute size-56 -translate-x-1/2 -translate-y-1/2"
      style={{ left: burst.x, top: burst.y }}
    >
      <BurstErrorBoundary onError={() => onDone(burst.id)}>
        <Suspense fallback={null}>
          <Lottie
            animationData={burst.animationData}
            loop={false}
            autoplay
            onComplete={() => onDone(burst.id)}
            className="size-full"
          />
        </Suspense>
      </BurstErrorBoundary>
    </div>
  )
}

export function CelebrateProvider({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion()
  const [bursts, setBursts] = useState<Burst[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const celebrateAt = useCallback(
    (x: number, y: number) => {
      if (reduce) return
      const id =
        typeof crypto !== 'undefined' && 'randomUUID' in crypto
          ? crypto.randomUUID()
          : String(Date.now())
      const animationData = createStarBurstAnimation(getCelebratePalette())
      setBursts((prev) => [...prev, { id, x, y, animationData }])
    },
    [reduce],
  )

  const celebrateFromEvent = useCallback(
    (event: { currentTarget: EventTarget & Element }) => {
      const rect = event.currentTarget.getBoundingClientRect()
      celebrateAt(rect.left + rect.width / 2, rect.top + rect.height / 2)
    },
    [celebrateAt],
  )

  const dismiss = useCallback((id: string) => {
    setBursts((prev) => prev.filter((burst) => burst.id !== id))
  }, [])

  const value = useMemo(
    () => ({ celebrateAt, celebrateFromEvent }),
    [celebrateAt, celebrateFromEvent],
  )

  return (
    <CelebrateContext.Provider value={value}>
      {children}
      {mounted
        ? createPortal(
            <div
              className="pointer-events-none fixed inset-0 z-[100] overflow-hidden"
              aria-hidden
            >
              {bursts.map((burst) => (
                <BurstPlayer key={burst.id} burst={burst} onDone={dismiss} />
              ))}
            </div>,
            document.body,
          )
        : null}
    </CelebrateContext.Provider>
  )
}

export function useCelebrate() {
  const ctx = useContext(CelebrateContext)
  if (!ctx) {
    throw new Error('useCelebrate must be used within CelebrateProvider')
  }
  return ctx
}
