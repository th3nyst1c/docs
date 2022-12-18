// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Dymension Docs",
    tagline: "Developer Documentation",
    url: "https://docs.dymension.xyz/",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "dymension-labs",
    projectName: "docs",
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    routeBasePath: "/",
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl: "https://github.com/dymensionxyz/docs/tree/main",
                },
                blog: false,
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
                gtag: {
                    trackingID: 'G-QQDTDE3E8X',
                    anonymizeIP: true,
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            themes: ["@docusaurus/theme-search-algolia"],
            colorMode: {
                defaultMode: "dark",
                disableSwitch: false,
                respectPrefersColorScheme: false,
            },
            docs: {
                sidebar: {
                    autoCollapseCategories: true,
                    hideable: true,
                },
            },
            navbar: {
                logo: {
                    alt: "dymension logo",
                    src: "img/logo.svg",
                    srcDark: "img/logo-light.svg",
                },
                items: [
                    {
                        type: "dropdown",
                        label: "Learn",
                        position: "left",
                        items: [
                            {
                                label: "Modular Architecture",
                                type: "doc",
                                docId: "learn/modular-intro",
                            },
                            {
                                label: "The Dymension Hub",
                                type: "doc",
                                docId: "learn/dymension-hub",
                            },
                            {
                                label: "RollApps",
                                type: "doc",
                                docId: "learn/rollapps",
                            },
                        ],
                    },
                    {
                        type: "dropdown",
                        label: "Developers",
                        position: "left",
                        items: [
                            {
                                type: "doc",
                                label: "Getting Started",
                                docId: "developers/getting-started/intro",
                            },
                            {
                                type: "doc",
                                label: "Checkers RollApp",
                                docId: "developers/checkers-rollapp/scaffold-rollapp",
                            },
                            {
                                type: "doc",
                                label: "CosmWasm RollApp",
                                docId: "developers/cosmwasm-rollapp/index",
                            },
                            {
                                type: "doc",
                                label: "EVM RollApp",
                                docId: "developers/evm-rollapp/intro",
                            },
                        ],
                    },
                    {
                        type: "dropdown",
                        label: "Validators",
                        position: "left",
                        items: [
                            {
                                type: "doc",
                                label: "Overview",
                                docId: "validators/full-node/index",
                            },
                            {
                                type: "doc",
                                label: "Run a node",
                                docId: "validators/full-node/run-a-node",
                            },
                            {
                                type: "doc",
                                label: "Reset and troubleshooting",
                                docId: "validators/full-node/reset-node",
                            },
                        ],
                    },
                    {
                        href: "https://github.com/dymensionxyz",
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "light",
                links: [
                    {
                        title: null,
                        items: [
                            {
                                html: `
                <div class="logo-container">                  
                  <a href="https://www.dymension.xyz" target="_blank" rel="noopener noreferrer" title="logo">
                     <img class="logo" src="/img/full-logo.svg" alt="Dymension Logo" />    
                     <img class="logo-light" src="/img/full-logo-light.svg" alt="Dymension Logo" />                  
                  </a>
                  <p class="copyright">By Builders <span class="heart-icon">♥</span> For Builders</p>
                </p>             
                `,
                            },
                        ],
                    },
                    {
                        title: "Community",
                        items: [
                            {
                                label: "Twitter",
                                href: "https://twitter.com/dymensionXYZ",
                            },
                            {
                                label: "Discord",
                                href: "https://discord.gg/dymension",
                            },
                            {
                                label: "Telegram",
                                href: "https://t.me/dymensionXYZ",
                            },
                            {
                                label: "Medium",
                                href: "https://medium.com/@dymensionXYZ",
                            },
                        ],
                    },
                    {
                        title: "Developers",
                        items: [
                            {
                                label: "GitHub",
                                href: "https://github.com/dymensionxyz",
                            },
                            {
                                label: "Docs",
                                href: "https://docs.dymension.xyz/",
                            },
                        ],
                    },
                ],
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            algolia: {
                appId: "D6G0Y2R87E",
                apiKey: "2883600674f127c6c857beb001770d22",
                indexName: "dymension",
                contextualSearch: true,
                searchParameters: {},
                searchPagePath: "search",
            },
        }),
};

module.exports = config;
