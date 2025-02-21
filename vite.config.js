import { fileURLToPath, URL } from 'node:url'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ZeroCup-2023/',
  assetsInclude: ['**/*.mp4'],
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
