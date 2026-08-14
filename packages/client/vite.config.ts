import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import Pages from 'vite-plugin-pages'
import { seoFilesPlugin } from './scripts/seoFilesPlugin.ts'

export default defineConfig(({ mode }) => {
  const root = fileURLToPath(new URL('.', import.meta.url))
  const env = loadEnv(mode, root, '')
  const siteUrl = (env.VITE_SITE_URL || 'https://ludditelabs.dev').replace(
    /\/+$/,
    '',
  )

  return {
    plugins: [
      react(),
      tailwindcss(),
      Pages({
        dirs: 'src/pages',
        importMode: 'async',
        extensions: ['tsx', 'ts'],
      }),
      seoFilesPlugin({
        root,
        siteUrl,
        casesDir: fileURLToPath(new URL('./src/content/cases', import.meta.url)),
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
