import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const DEFAULT_SHEET_ID = '15qJiWWGd70_yp4oGqP6zuf3fghMi5alWI3zKK4Vp8rE'
const DEFAULT_SHEET_GID = '0'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const sheetId = env.VITE_PRODUCTS_SHEET_ID?.trim() || DEFAULT_SHEET_ID
  const gid = env.VITE_PRODUCTS_SHEET_GID?.trim() || DEFAULT_SHEET_GID

  const googleSheetRewrite = () =>
    `/spreadsheets/d/${sheetId}/export?format=csv&gid=${encodeURIComponent(gid)}`

  const sheetProxy = {
    '/google-sheet-export': {
      target: 'https://docs.google.com',
      changeOrigin: true,
      secure: true,
      rewrite: googleSheetRewrite,
    },
  }

  return {
    plugins: [react()],
    server: {
      proxy: sheetProxy,
    },
    preview: {
      proxy: sheetProxy,
    },
  }
})
