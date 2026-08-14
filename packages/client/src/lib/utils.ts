import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** Merge semantic class names only — never pass raw Tailwind utility strings from callers. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
