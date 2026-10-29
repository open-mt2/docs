import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import type { PrismTheme } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const openmt2LightTheme: PrismTheme = {
  plain: {
    color: "#3b2a29",
    backgroundColor: "#fbf1f0",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: { color: "#9a807d", fontStyle: "italic" },
    },
    { types: ["punctuation"], style: { color: "#6f5a58" } },
    { types: ["namespace"], style: { opacity: 0.7 } },
    {
      types: ["property", "tag", "constant", "symbol", "deleted"],
      style: { color: "#c0342f" },
    },
    { types: ["boolean", "number"], style: { color: "#b45309" } },
    {
      types: ["selector", "attr-name", "string", "char", "builtin", "inserted"],
      style: { color: "#0f766e" },
    },
    {
      types: ["operator", "entity", "url", "variable"],
      style: { color: "#9f1239" },
    },
    {
      types: ["atrule", "attr-value", "function", "class-name"],
      style: { color: "#a21caf" },
    },
    { types: ["keyword"], style: { color: "#be123c", fontWeight: "600" } },
    { types: ["regex", "important"], style: { color: "#b45309" } },
    { types: ["important", "bold"], style: { fontWeight: "700" } },
    { types: ["italic"], style: { fontStyle: "italic" } },
  ],
};

const openmt2DarkTheme: PrismTheme = {
  plain: {
    color: "#e9dedd",
    backgroundColor: "#1a1112",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: { color: "#8f7370", fontStyle: "italic" },
    },
    { types: ["punctuation"], style: { color: "#b9a3a1" } },
    { types: ["namespace"], style: { opacity: 0.7 } },
    {
      types: ["property", "tag", "constant", "symbol", "deleted"],
      style: { color: "#ff7b7b" },
    },
    { types: ["boolean", "number"], style: { color: "#ffb86b" } },
    {
      types: ["selector", "attr-name", "string", "char", "builtin", "inserted"],
      style: { color: "#7ee0c3" },
    },
    {
      types: ["operator", "entity", "url", "variable"],
      style: { color: "#ff9db0" },
    },
    {
      types: ["atrule", "attr-value", "function", "class-name"],
      style: { color: "#f0a6ff" },
    },
    { types: ["keyword"], style: { color: "#ff5c5c", fontWeight: "600" } },
    { types: ["regex", "important"], style: { color: "#ffb86b" } },
    { types: ["important", "bold"], style: { fontWeight: "700" } },
    { types: ["italic"], style: { fontStyle: "italic" } },
  ],
};

const config: Config = {
  title: "OpenMT2",
  tagline:
    "Documentation, guides, and reference material for the OpenMT2 project.",
  favicon: "img/favicon.svg",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // GitHub Pages project site: https://open-mt2.github.io/docs/
  // If you attach a custom domain, change this to the domain and set baseUrl to "/".
  url: "https://open-mt2.github.io",
  baseUrl: "/docs/",

  organizationName: "open-mt2",
  projectName: "docs",

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "client",
        path: "projects/client/docs",
        routeBasePath: "client",
        sidebarPath: "./projects/client/sidebars.ts",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "server",
        path: "projects/server/docs",
        routeBasePath: "server",
        sidebarPath: "./projects/server/sidebars.ts",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "neoeter",
        path: "projects/neoeter/docs",
        routeBasePath: "neoeter",
        sidebarPath: "./projects/neoeter/sidebars.ts",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "other-projects",
        path: "projects/other-projects/docs",
        routeBasePath: "other-projects",
        sidebarPath: "./projects/other-projects/sidebars.ts",
      },
    ],
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "guide",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "OpenMT2",
      logo: {
        alt: "OpenMT2 logo",
        src: "img/favicon.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Docs",
        },
        {
          type: "dropdown",
          label: "Projects",
          position: "left",
          className: "navbar-projects",
          items: [
            {
              label: "Client",
              to: "/client/",
            },
            {
              label: "Server",
              to: "/server/",
            },
            {
              label: "Neoeter",
              to: "/neoeter/",
            },
            {
              label: "Other Projects",
              to: "/other-projects/",
            },
          ],
        },
        {
          href: "https://github.com/open-mt2",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "/guide/intro",
            },
            {
              label: "Roadmap",
              to: "/guide/roadmap",
            },
            {
              label: "Contributing",
              to: "/guide/contributing",
            },
          ],
        },
        {
          title: "Project",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/open-mt2",
            },
            {
              label: "Issues",
              href: "https://github.com/open-mt2/docs/issues",
            },
            {
              label: "Blog",
              to: "/blog",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OpenMT2. Built with Docusaurus.`,
    },
    prism: {
      theme: openmt2LightTheme,
      darkTheme: openmt2DarkTheme,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
