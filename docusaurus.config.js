// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'F.Z. DarkRP伺服器',
  tagline: 'Dinosaurs are cool',
  url: 'https://rp.fz-game.club',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/g_icon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'FZ-Game', // Usually your GitHub org/user name.
  projectName: 'motd-rp', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          routeBasePath: '/',
          editUrl:
            'https://github.com/FZ-Game/motd-rp/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          path: 'news',
          routeBasePath: '/news',
          editUrl:
            'https://github.com/FZ-Game/motd-rp/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'F.Z. DarkRP伺服器',
        logo: {
          alt: 'F.Z. Server',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/news',
            position: 'left',
            label: '公告',
          },
          {
            to: '/rules',
            position: 'left',
            label: '規則',
          },
          {
            href: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2840300177',
            label: 'Steam工作坊',
            position: 'right',
          },
          {
            href: 'https://discord.gg/rMjY9YJKbt',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '頁面',
            items: [
              {
                label: '規則',
                to: '/rules',
              },
              {
                label: '常見問答',
                to: '/qna',
              },
            ],
          },
          {
            title: '社群',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/rMjY9YJKbt',
              },
              {
                label: 'Steam群組',
                href: 'https://steamcommunity.com/groups/freezonetw',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '公告',
                to: '/news',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} F.Z. Game Club.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
