import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.gltf', '**/*.png','**/*.txt', '**/*.bin'],
  root: "./",
  build:{
    outDir: "dist"
  },
  publicDir: "assets"
  
})

module.exports = {
  root: "./",
  build:{
    outDir: "dist"
  },
  publicDir: "assets"
}



