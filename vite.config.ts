import { defineConfig } from "vite"
import type { CommonServerOptions, UserConfig } from "vite"
import { svelte } from "@sveltejs/vite-plugin-svelte"

const serverConfig: CommonServerOptions = {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true
}

const baseConfig: UserConfig = defineConfig({
    server: serverConfig,
    preview: serverConfig,
    build: {
        outDir: "./build"
    },
    plugins: [svelte()]
})

export default defineConfig(({ mode }) => {
    if (mode === "development") {
        return {
            // Development Mode Config
            ...baseConfig,
            base: "/"
        }
    } else {
        return {
            // Production Mode Config
            ...baseConfig,
            base: "/test-repo/"
        }
    }
})
