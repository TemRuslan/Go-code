import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // Use a relative base so the same build works at:
  // - https://<user>.github.io/<repo>/          (repo root)
  // - https://<user>.github.io/<repo>/index2/   (subfolder)
  base: "./",
  plugins: [react()],
});
