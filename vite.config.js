import { defineConfig } from 'vite'
import dns from 'dns'
import { resolve } from 'path';
import { ViteEjsPlugin } from "vite-plugin-ejs";
import data from './src/data'

dns.setDefaultResultOrder('verbatim')

export default defineConfig({
  server: {
    port: 3000,
    open: '/'
  },
  root: "src",
  build: {
    outDir: '../dist',
  },
  publicDir: "../public",
  assetsInclude: ['partials/**/*.ejs', 'data.json'],
  plugins: [
    ViteEjsPlugin(data)
  ],
})
