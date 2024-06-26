import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
// uncomment when building for a library
// import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // build: {
  //   lib: {
  //     entry: path.resolve(__dirname, './src/main.tsx'),
  //     name: 'SharedUI',
  //     fileName: 'shared-ui',
  //   },
  //   rollupOptions: {
  //     external: ['react', 'react-dom'],
  //     output: {
  //       globals: {
  //         react: 'React',
  //       },
  //     },
  //   },
  // },
});
