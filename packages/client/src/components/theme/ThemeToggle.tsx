import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/components/theme/ThemeProvider'

export function ThemeToggle() {
  const { resolvedTheme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const next = resolvedTheme === 'dark' ? 'light' : 'dark'

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label={mounted ? `Switch to ${next} theme` : 'Toggle theme'}
      title={mounted ? `Switch to ${next} theme` : 'Toggle theme'}
      onClick={toggleTheme}
    >
      {!mounted ? (
        <Moon className="opacity-0" aria-hidden />
      ) : resolvedTheme === 'dark' ? (
        <Sun />
      ) : (
        <Moon />
      )}
    </Button>
  )
}
