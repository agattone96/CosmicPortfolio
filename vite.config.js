// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Export Vite configuration
export default defineConfig({
  plugins: [react()],

  server: {
    // Bind to all interfaces (important for Replit)
    host: '0.0.0.0',

    // Standard Vite port (can be changed if needed)
    port: 5173,

    // Allow external hosts (required for .replit.dev preview)
    allowedHosts: ["42b6879a-4af5-40bd-bebb-36b9c5e40596-00-3kluhuup6ncdg.worf.replit.dev"],

    // HMR settings for HTTPS tunneling
    hmr: {
      clientPort: 443,
    }
  }
});