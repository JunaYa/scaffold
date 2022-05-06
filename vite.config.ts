import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  // 项目根目录
  // root: process.cwd(),
  root: './src/pages/',
  // 项目部署的基础路径
  base: '/',
  publicDir: 'public',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'components': resolve(__dirname, 'src/components')
    },
    dedupe: [],
    // 情景导出package.json 配置中的 exports 字段
    conditions: [],
    // 解析package.json 中的字段
    mainFields: ['module', 'jsnext:main', 'jsnext'],
    // 导入时想要省略的扩展名列表
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  plugins: [
    vue(),
  ],
  build: {
    // 浏览器兼容性 ‘esnext’ | 'modules'
    target: 'modules',
    outDir: '../../dist',
    // 生成静态资源的存放路径
    assetsDir: "../assets",
    // 小于此阈值的导入或引用资源将内联为 base64 编码， 以避免额外的http请求， 设置为 0, 可以完全禁用此项，
    assetsInlineLimit: 4096,
    // 启动 / 禁用 CSS 代码拆分
    cssCodeSplit: true,
    // 构建后是否生成 soutrce map 文件
    sourcemap: false,
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'src/pages/home/index.html'),
        nested: resolve(__dirname, 'src/pages/nested/index.html')
      },
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
      },
    },
  },
})
