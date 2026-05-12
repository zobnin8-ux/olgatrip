import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  const siteOrigin = env.VITE_PUBLIC_ORIGIN?.replace(/\/$/, "") ?? "";

  return {
    plugins: [
      react(),
      {
        name: "inject-public-origin-meta",
        transformIndexHtml(html) {
          const ogImage = siteOrigin
            ? `<meta property="og:image" content="${siteOrigin}/images/olga.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="1200" />
    <meta name="twitter:image" content="${siteOrigin}/images/olga.png" />`
            : "";
          const ogUrl = siteOrigin
            ? `<meta property="og:url" content="${siteOrigin}/ru" />`
            : "";

          return html
            .replace("%%OG_IMAGE_BLOCK%%", ogImage)
            .replace("%%OG_URL_META%%", ogUrl);
        },
      },
    ],
  };
});
