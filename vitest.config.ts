import { mergeConfig } from "vite";
import { defineConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      exclude: ["node_modules"],
      globals: true,
      environment: "jsdom",
      setupFiles: "./tests/setup.ts",
    },
  })
);
