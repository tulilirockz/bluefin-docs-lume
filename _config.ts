import lume from "lume/mod.ts";
import lumocs from "lumocs/mod.ts";
import jsx from "lume/plugins/jsx_preact.ts";
import mdx from "lume/plugins/mdx.ts";
import checkUrls from "lume/plugins/check_urls.ts";
import multilanguage from "lume/plugins/multilanguage.ts";
import pagefind from "lume/plugins/pagefind.ts";
import robots from "lume/plugins/robots.ts";
import metas from "lume/plugins/metas.ts";
import brotli from "lume/plugins/brotli.ts";
import lightningCss from "lume/plugins/lightningcss.ts";
import minifyHTML from "lume/plugins/minify_html.ts";
import sourceMaps from "lume/plugins/source_maps.ts";

const site = lume();

site.use(lumocs());
site.use(jsx());
site.use(mdx());
site.use(checkUrls());
site.use(multilanguage({
  languages: ["en"],
  defaultLanguage: "en",
}));
site.use(pagefind({
  ui: {
    containerId: "search",
    showImages: false,
    showEmptyFilters: false,
    resetStyles: true,
  },
}));
site.use(robots());
site.use(metas());
site.use(brotli());
site.use(lightningCss());
site.use(minifyHTML());
site.use(sourceMaps());

export default site;
