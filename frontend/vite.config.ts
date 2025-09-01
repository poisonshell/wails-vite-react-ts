import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tanstackRouter(), react(), tailwindcss()],
  clearScreen: false,
  server: {
    port: 5173,
    host: "127.0.0.1",
    strictPort: true,
    hmr: {
      port: 5173,
      host: "127.0.0.1",
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
