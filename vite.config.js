import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // where "dashboard-2" is GitHub code repository name.
  base: "/dashboard-2/",
});
