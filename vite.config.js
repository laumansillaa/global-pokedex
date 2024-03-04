import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteCompression({
      verbose: true,
      algorithm: "brotliCompress",
      disable: false,
      ext: ".br",
      filter: /\.(js|css|json|txt|html|ico|svg|md|ttf)$/,
    }),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
