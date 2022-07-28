import { defineConfig, configDefaults } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  test: {
    globals: true,

    environment: 'happy-dom',
  },

  plugins: [vue()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
})