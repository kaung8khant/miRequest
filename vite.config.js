import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    outDir: "dist",
    watch: {},
    rollupOptions: {
      input: {
        content: resolve(__dirname, "src/content.js"),
        popup: resolve(__dirname, "src/popup.js"),
      },
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
  ssr: {
    noExternal: ["pdf-lib"],
  },
  publicDir: "public", // will copy your manifest.json from public to dist
});
