import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls }  from 'vite-plugin-vuetify'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  plugins: [vue({ 
    template: { transformAssetUrls } 
  }), 
  vuetify({ autoImport: true }
  )],
})
