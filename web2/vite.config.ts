import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import WindiCSSPlugin from "vite-plugin-windicss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), WindiCSSPlugin()],
});
