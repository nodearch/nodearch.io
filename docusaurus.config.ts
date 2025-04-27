import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'NodeArch',
  tagline: 'Node.JS Backend framework',
  
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://nodearch.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'nodearch', // Usually your GitHub org/user name.
  projectName: 'nodearch', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   // editUrl:
        //   //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/nodearch-social-card.png',
    navbar: {
      title: 'NodeArch',
      logo: {
        alt: 'NodeArch Logo',
        src: 'img/nodearch-logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Docs',
        },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'extensions',
        //   position: 'left',
        //   label: 'Extensions',
        // },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'api',
        //   position: 'left',
        //   label: 'API',
        // },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'architecture',
        //   position: 'left',
        //   label: 'Architecture',
        // },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'developer',
        //   position: 'left',
        //   label: 'Developer',
        // },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'roadmapSidebar',
        //   position: 'left',
        //   label: 'Roadmap',
        // },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'changelogSidebar',
        //   position: 'left',
        //   label: 'Changelog',
        // },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/nodearch/nodearch',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    algolia: {
      appId: 'HCZ67KVZRI',
      apiKey: '5ac595f3332920393fb6a09cfdf14ed2',
      indexName: 'nodearch',
      contextualSearch: true,
      searchParameters: {},
      searchPagePath: 'search',
      insights: true,
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started/hello-world',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/nodearch',
            },
            // {
            //   label: 'Slack',
            //   href: 'https://nodearch.slack.com',
            // }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/nodearch',
            },
            {
              label: 'Author',
              to: 'https://github.com/ahmedali7o1',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NodeArch. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    metadata: [
      {
        name: 'algolia-site-verification',
        content: 'B59DAB6F0B4CED4A'
      }
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;
