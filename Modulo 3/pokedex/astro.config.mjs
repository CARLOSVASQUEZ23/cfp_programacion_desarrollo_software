import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import icons from "astro-icons";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icons()]
});