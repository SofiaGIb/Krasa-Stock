import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: { entry: "index.js" },
  plugins: [react()],
  build: {
    rollupOptions: {
      input: "src/index.js",
    },
  },
});
