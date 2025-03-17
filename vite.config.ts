import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/", // 👈 Replace with your actual GitHub repo name
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});