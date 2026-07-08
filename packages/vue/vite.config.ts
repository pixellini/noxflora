import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [
        vue(),
        dts({
            tsconfigPath: './tsconfig.build.json',
            cleanVueFileName: true,
            rollupTypes: true,
        }),
    ],
    build: {
        cssCodeSplit: false,
        lib: {
            entry: 'src/index.ts',
            formats: ['es'],
            fileName: () => 'index.js',
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                assetFileNames: 'style.css',
            },
        },
    },
})
