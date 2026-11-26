import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "@tanstack/react-query", "@tanstack/query-core"],
  },
  build: {
    ssr: true,
    outDir: "dist/server",
    rollupOptions: {
      input: {
        "entry-server": path.resolve(__dirname, "src/entry-server.tsx"),
      },
      output: {
        format: "esm",
        entryFileNames: "[name].js",
      },
    },
  },
  ssr: {
    noExternal: [
      "@radix-ui/*",
      "@tanstack/react-query",
      "react-helmet-async",
    ],
  },
});
