import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import * as path from "node:path";
import { isExternal } from "../shared-vite-config";

export default defineConfig(() => ({
  root: import.meta.dir,
  cacheDir: "../../node_modules/.vite/libs/icons",
  plugins: [
    react(),
    dts({ entryRoot: "src", tsconfigPath: path.join(import.meta.dir, "tsconfig.lib.json") }),
  ],
  build: {
    outDir: "./dist",
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      entry: "src/index.ts",
      name: "@storyteller/icons",
      fileName: "index",
      formats: ["es" as const],
    },
    rollupOptions: {
      external: isExternal,
    },
  },
}));
