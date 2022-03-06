import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.gltf']
  
})

module.exports = {
  root: "./",
  build:{
    ourDir: "dist"
  },
  publicDir: "assets"
}



