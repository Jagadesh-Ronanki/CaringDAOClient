import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    // "process.env": process.env,
    // // By default, Vite doesn't include shims for NodeJS/
    // // necessary for segment analytics lib to work
    "global": {},
},
  resolve: {
    alias: {
      process: 'process/browser',
      util: 'util',
    },
  },
  plugins: [react()],
})
