/* eslint-disable prettier/prettier */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import eslint from "vite-plugin-eslint";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    eslint({
      emitWarning: true, // emits to the console if there is a warning
      emitError: true, // emits to the console if there is an error
      failOnError: true, // hides the stack trace
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
