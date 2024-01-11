import { defineConfig } from "vite"
import type { CommonServerOptions } from "vite"

const serverConfig: CommonServerOptions = {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true
}

export default defineConfig(({ mode }) => {
    return {
        base: (mode === "production") ? "/" : "/test-repo/",
        server: serverConfig,
        preview: serverConfig,
        build: {
            outDir: "./build"
        }
    }
})
