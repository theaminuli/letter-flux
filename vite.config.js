import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': resolve(import.meta.dirname, 'src')
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                // Ensure SCSS can resolve imports properly
                includePaths: ['src/assets/styles']
            }
        }
    }
})
