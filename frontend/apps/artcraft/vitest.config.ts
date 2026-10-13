import { defineConfig } from "vitest/config";

export default defineConfig({
  root: import.meta.dir,
  test: {
    environment: "jsdom",
    include: ["app/src/**/*.spec.{ts,tsx}"],
  },
});
