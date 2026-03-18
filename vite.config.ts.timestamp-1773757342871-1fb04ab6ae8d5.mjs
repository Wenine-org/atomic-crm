// vite.config.ts
import path from "node:path";
import { defineConfig } from "file:///Users/sheltonpromes/Documents/atomic-crm/node_modules/vite/dist/node/index.js";
import tailwindcss from "file:///Users/sheltonpromes/Documents/atomic-crm/node_modules/@tailwindcss/vite/dist/index.mjs";
import react from "file:///Users/sheltonpromes/Documents/atomic-crm/node_modules/@vitejs/plugin-react/dist/index.js";
import { visualizer } from "file:///Users/sheltonpromes/Documents/atomic-crm/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import createHtmlPlugin from "file:///Users/sheltonpromes/Documents/atomic-crm/node_modules/vite-plugin-simple-html/dist/index.js";
import { VitePWA } from "file:///Users/sheltonpromes/Documents/atomic-crm/node_modules/vite-plugin-pwa/dist/index.js";
var __vite_injected_original_dirname = "/Users/sheltonpromes/Documents/atomic-crm";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    visualizer({
      open: process.env.NODE_ENV !== "CI",
      filename: "./dist/stats.html"
    }),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          mainScript: `src/main.tsx`
        }
      }
    }),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,woff,woff2}"],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024
        // 5 MiB
      },
      manifest: false
      // Use existing manifest.json from public/
    })
  ],
  define: process.env.NODE_ENV === "production" && process.env.VITE_SUPABASE_URL ? {
    "import.meta.env.VITE_IS_DEMO": JSON.stringify(
      process.env.VITE_IS_DEMO
    ),
    "import.meta.env.VITE_SUPABASE_URL": JSON.stringify(
      process.env.VITE_SUPABASE_URL
    ),
    "import.meta.env.VITE_SB_PUBLISHABLE_KEY": JSON.stringify(
      process.env.VITE_SB_PUBLISHABLE_KEY
    ),
    "import.meta.env.VITE_INBOUND_EMAIL": JSON.stringify(
      process.env.VITE_INBOUND_EMAIL
    )
  } : void 0,
  base: "./",
  esbuild: {
    keepNames: true
  },
  build: {
    sourcemap: true
  },
  resolve: {
    preserveSymlinks: true,
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvc2hlbHRvbnByb21lcy9Eb2N1bWVudHMvYXRvbWljLWNybVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3NoZWx0b25wcm9tZXMvRG9jdW1lbnRzL2F0b21pYy1jcm0vdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3NoZWx0b25wcm9tZXMvRG9jdW1lbnRzL2F0b21pYy1jcm0vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcGF0aCBmcm9tIFwibm9kZTpwYXRoXCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gXCJAdGFpbHdpbmRjc3Mvdml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IHsgdmlzdWFsaXplciB9IGZyb20gXCJyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXJcIjtcbmltcG9ydCBjcmVhdGVIdG1sUGx1Z2luIGZyb20gXCJ2aXRlLXBsdWdpbi1zaW1wbGUtaHRtbFwiO1xuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gXCJ2aXRlLXBsdWdpbi1wd2FcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIHRhaWx3aW5kY3NzKCksXG4gICAgdmlzdWFsaXplcih7XG4gICAgICBvcGVuOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJDSVwiLFxuICAgICAgZmlsZW5hbWU6IFwiLi9kaXN0L3N0YXRzLmh0bWxcIixcbiAgICB9KSxcbiAgICBjcmVhdGVIdG1sUGx1Z2luKHtcbiAgICAgIG1pbmlmeTogdHJ1ZSxcbiAgICAgIGluamVjdDoge1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgbWFpblNjcmlwdDogYHNyYy9tYWluLnRzeGAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIFZpdGVQV0Eoe1xuICAgICAgcmVnaXN0ZXJUeXBlOiBcImF1dG9VcGRhdGVcIixcbiAgICAgIHdvcmtib3g6IHtcbiAgICAgICAgZ2xvYlBhdHRlcm5zOiBbXCIqKi8qLntqcyxjc3MsaHRtbCxpY28scG5nLHN2Zyx3b2ZmLHdvZmYyfVwiXSxcbiAgICAgICAgbWF4aW11bUZpbGVTaXplVG9DYWNoZUluQnl0ZXM6IDUgKiAxMDI0ICogMTAyNCwgLy8gNSBNaUJcbiAgICAgIH0sXG4gICAgICBtYW5pZmVzdDogZmFsc2UsIC8vIFVzZSBleGlzdGluZyBtYW5pZmVzdC5qc29uIGZyb20gcHVibGljL1xuICAgIH0pLFxuICBdLFxuICBkZWZpbmU6XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiICYmIHByb2Nlc3MuZW52LlZJVEVfU1VQQUJBU0VfVVJMXG4gICAgICA/IHtcbiAgICAgICAgICBcImltcG9ydC5tZXRhLmVudi5WSVRFX0lTX0RFTU9cIjogSlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgICBwcm9jZXNzLmVudi5WSVRFX0lTX0RFTU8sXG4gICAgICAgICAgKSxcbiAgICAgICAgICBcImltcG9ydC5tZXRhLmVudi5WSVRFX1NVUEFCQVNFX1VSTFwiOiBKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICAgIHByb2Nlc3MuZW52LlZJVEVfU1VQQUJBU0VfVVJMLFxuICAgICAgICAgICksXG4gICAgICAgICAgXCJpbXBvcnQubWV0YS5lbnYuVklURV9TQl9QVUJMSVNIQUJMRV9LRVlcIjogSlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgICBwcm9jZXNzLmVudi5WSVRFX1NCX1BVQkxJU0hBQkxFX0tFWSxcbiAgICAgICAgICApLFxuICAgICAgICAgIFwiaW1wb3J0Lm1ldGEuZW52LlZJVEVfSU5CT1VORF9FTUFJTFwiOiBKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICAgIHByb2Nlc3MuZW52LlZJVEVfSU5CT1VORF9FTUFJTCxcbiAgICAgICAgICApLFxuICAgICAgICB9XG4gICAgICA6IHVuZGVmaW5lZCxcbiAgYmFzZTogXCIuL1wiLFxuICBlc2J1aWxkOiB7XG4gICAga2VlcE5hbWVzOiB0cnVlLFxuICB9LFxuICBidWlsZDoge1xuICAgIHNvdXJjZW1hcDogdHJ1ZSxcbiAgfSxcbiAgcmVzb2x2ZToge1xuICAgIHByZXNlcnZlU3ltbGlua3M6IHRydWUsXG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNlMsT0FBTyxVQUFVO0FBQzlULFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sV0FBVztBQUNsQixTQUFTLGtCQUFrQjtBQUMzQixPQUFPLHNCQUFzQjtBQUM3QixTQUFTLGVBQWU7QUFOeEIsSUFBTSxtQ0FBbUM7QUFTekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sWUFBWTtBQUFBLElBQ1osV0FBVztBQUFBLE1BQ1QsTUFBTSxRQUFRLElBQUksYUFBYTtBQUFBLE1BQy9CLFVBQVU7QUFBQSxJQUNaLENBQUM7QUFBQSxJQUNELGlCQUFpQjtBQUFBLE1BQ2YsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLFFBQ04sTUFBTTtBQUFBLFVBQ0osWUFBWTtBQUFBLFFBQ2Q7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxRQUFRO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxTQUFTO0FBQUEsUUFDUCxjQUFjLENBQUMsMkNBQTJDO0FBQUEsUUFDMUQsK0JBQStCLElBQUksT0FBTztBQUFBO0FBQUEsTUFDNUM7QUFBQSxNQUNBLFVBQVU7QUFBQTtBQUFBLElBQ1osQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFFBQ0UsUUFBUSxJQUFJLGFBQWEsZ0JBQWdCLFFBQVEsSUFBSSxvQkFDakQ7QUFBQSxJQUNFLGdDQUFnQyxLQUFLO0FBQUEsTUFDbkMsUUFBUSxJQUFJO0FBQUEsSUFDZDtBQUFBLElBQ0EscUNBQXFDLEtBQUs7QUFBQSxNQUN4QyxRQUFRLElBQUk7QUFBQSxJQUNkO0FBQUEsSUFDQSwyQ0FBMkMsS0FBSztBQUFBLE1BQzlDLFFBQVEsSUFBSTtBQUFBLElBQ2Q7QUFBQSxJQUNBLHNDQUFzQyxLQUFLO0FBQUEsTUFDekMsUUFBUSxJQUFJO0FBQUEsSUFDZDtBQUFBLEVBQ0YsSUFDQTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sU0FBUztBQUFBLElBQ1AsV0FBVztBQUFBLEVBQ2I7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFdBQVc7QUFBQSxFQUNiO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxrQkFBa0I7QUFBQSxJQUNsQixPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
