export const theme = {
  colors: {
    ink: 'var(--ll-ink)',
    inkSoft: 'var(--ll-ink-soft)',
    paper: 'var(--ll-paper)',
    paperDeep: 'var(--ll-paper-deep)',
    steel: 'var(--ll-steel)',
    rust: 'var(--ll-rust)',
    blueprint: 'var(--ll-blueprint)',
  },
  fonts: {
    display: 'var(--ll-font-display)',
    body: 'var(--ll-font-body)',
    mono: 'var(--ll-font-mono)',
  },
  motion: {
    ease: 'var(--ll-ease)',
    fast: 'var(--ll-duration-fast)',
    base: 'var(--ll-duration)',
    slow: 'var(--ll-duration-slow)',
  },
} as const

export type ThemeColor = keyof typeof theme.colors
