import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173,
    host: true,
    allowedHosts: [
      '3d4857fa.r27.cpolar.top', // 你的 cpolar 域名
      '7756c816.r27.cpolar.top', // 博客地址
      'localhost', // 保留本地，防止本地访问失效
      '127.0.0.1'
    ],
  },
})

