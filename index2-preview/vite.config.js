import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages project site: https://<user>.github.io/<repo>/
  // We publish the built app under /go-code/index2/
  // Repo name is "gocode" (GitHub redirects from Go-code).
  base: "/gocode/index2/",
  plugins: [react()],
});
