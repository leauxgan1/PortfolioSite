import { defineConfig } from "astro/config";
//import viteTsconfigPaths from "vite-tsconfig-paths";
import icon from "astro-icon";


export default defineConfig({
  site: "https://leauxgan1.github.io/",

  base: "/PortfolioSite/",
  trailingSlash: "always",
	build: {
    assetsPrefix: "",
  },

  output: "static",

  integrations: [icon()],

});
