import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'nodejs-40913-999434550.cloudwaysstagingapps.com',
      '.cloudwaysstagingapps.com',
    ],
  },
  preview: {
    allowedHosts: [
      'nodejs-40913-999434550.cloudwaysstagingapps.com',
      '.cloudwaysstagingapps.com',
    ],
  },
});
