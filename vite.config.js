import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    publicDir: false,
    plugins: [tailwindcss()],
    build: {
        outDir: "./public/assets",
        chunkSizeWarningLimit: 800,
        emptyOutDir: false,
        cssCodeSplit: false,
        // Qualquer objeto aqui liga o watch; só vale no `vite build --watch` (app:dev), senão build:app não termina
        watch: process.argv.includes("--watch") ? {
            exclude: ["public/**", "bin/**", "resources/**", "node_modules/**", ".git/**"],
        } : null,
        rollupOptions: {
            input: "./src/web/assets/js/app.js",
            output: {
                minify: true,
                entryFileNames: "js/app.min.js",
                chunkFileNames: "app-[name].min.js",
                assetFileNames: (info) => {
                    const name = info.names?.[0] ?? info.name ?? "";
                    return name.endsWith(".css") ? "css/app.min.css" : "assets/[name][extname]";
                }
            }
        }
    },
});
