import path from "path"
import vue from "@vitejs/plugin-vue"
import { defineConfig } from "vite"

export default defineConfig({
  build: {
    outDir: "dist",
    sourcemap: false,
  },
  server: {
    port: 5173,
    strictPort: true,
    hmr: {
      port: 5173,
    },
  },
  plugins: [vue() as never],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    },
  },
})
