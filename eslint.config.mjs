import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
});

export default [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: ["legacy/**", ".next/**", "node_modules/**"],
  },
  {
    rules: {
      // The site's images are local, fixed-size assets styled by hand-written
      // CSS (object-fit, aspect-ratio, mix-blend-mode). next/image would wrap
      // them and change that layout, so plain <img> is deliberate here.
      "@next/next/no-img-element": "off",
    },
  },
];
