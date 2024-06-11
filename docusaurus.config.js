// @ts-check
const { themes } = require('prism-react-renderer')
const lightTheme = themes.github
const darkTheme = themes.dracula

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MEGAJS',
  tagline: 'Unofficial JavaScript SDK for Mega',
  url: 'https://mega.js.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'qgustavor',
  projectName: 'mega',
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/qgustavor/megajs-docs/tree/main/',
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
            [require('./src/plugins/node2deno'), {}]
          ],
          lastVersion: 'current',
          versions: {
            current: {
              label: '1.0',
              path: '1.0'
            }
          }
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true
      },
      navbar: {
        title: 'MEGAJS',
        items: [
          {
            type: 'doc',
            docId: 'tutorial/intro',
            position: 'left',
            label: 'Tutorial'
          },
          {
            type: 'doc',
            docId: 'examples/intro',
            position: 'left',
            label: 'Code examples'
          },
          {
            type: 'doc',
            docId: 'api',
            position: 'left',
            label: 'API Reference'
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true
          },
          {
            href: 'https://github.com/qgustavor/mega',
            label: 'GitHub',
            position: 'right'
          }
        ]
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/1.0/tutorial/intro'
              },
              {
                label: 'API reference',
                to: '/docs/1.0/api'
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/qgustavor/mega'
              }
            ]
          }
        ],
        copyright: 'Built with <a href="https://docusaurus.io/">Docusaurus</a>.'
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme
      }
    })
}

module.exports = config
