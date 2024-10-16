import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@fontPKMN": path.resolve(
        __dirname,
        "./src/assets/fonts/PKMN RBYGSC.ttf"
      ),
      "@arrowDown": path.resolve(__dirname, "./src/assets/arrow-down.png"),
      "@arrowUp": path.resolve(__dirname, "./src/assets/arrow-up.png"),
    },
  },
});
