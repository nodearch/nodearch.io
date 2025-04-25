import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'introduction/what-is-nodearch',
        'introduction/why-nodearch',
        'introduction/key-features',
        'introduction/philosophy-design-principles',
      ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/installation',
        'getting-started/hello-world',
        'getting-started/project-structure',
        'getting-started/quick-tour',
      ],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      items: [
        'core-concepts/dependency-injection',
        'core-concepts/modules',
        'core-concepts/hooks-lifecycle',
        'core-concepts/providers-services',
        'core-concepts/configuration',
      ],
    },
    {
      type: 'category',
      label: 'Guide',
      items: [
        'guide/controllers',
        'guide/decorators',
        'guide/environment-config',
        'guide/error-handling',
        'guide/hooks',
        'guide/logging',
        'guide/middleware',
        'guide/routing',
        'guide/services',
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      items: [
        'advanced/advanced-di',
        'advanced/aop-extensions',
        'advanced/custom-decorators',
        'advanced/extending-cli',
        'advanced/module-composition',
        'advanced/testing',
      ],
    },
    {
      type: 'category',
      label: 'Best Practices',
      items: [
        'best-practices/structuring-apps',
        'best-practices/third-party-libs',
        'best-practices/security',
        'best-practices/performance',
        'best-practices/debugging',
      ],
    },
    {
      type: 'category',
      label: 'Recipes',
      items: [
        'recipes/auth-jwt',
        'recipes/caching-redis',
        'recipes/cron-jobs',
        'recipes/database-repos',
        'recipes/file-uploads',
        'recipes/multi-tenant',
      ],
    },
    {
      type: 'category',
      label: 'Plugins',
      items: [
        'plugins/writing-plugin',
        'plugins/sharing',
        'plugins/example-plugin',
      ],
    },
    {
      type: 'category',
      label: 'Contributing',
      items: [
        'contributing/how-to-contribute',
        'contributing/issue-templates',
        'contributing/local-setup',
        'contributing/pr-guidelines',
        'contributing/style-guide',
      ],
    },
    {
      type: 'category',
      label: 'FAQ',
      items: [
        'faq/common-issues',
        'faq/vs-nestjs',
        'faq/migrate-from-express',
      ],
    },
    {
      type: 'category',
      label: 'Tutorial - Basics',
      items: [
        'tutorial-basics/create-a-page',
        'tutorial-basics/create-a-document',
        'tutorial-basics/create-a-blog-post',
        'tutorial-basics/markdown-features',
        'tutorial-basics/deploy-your-site',
        'tutorial-basics/congratulations',
      ],
    },
    {
      type: 'category',
      label: 'Tutorial - Extras',
      items: [
        'tutorial-extras/manage-docs-versions',
        'tutorial-extras/translate-your-site',
      ],
    },
  ],
  // changelog: [
  //   'changelog',
  // ],
  // api: [
  //   'api-reference/cli',
  //   'api-reference/configuration',
  //   'api-reference/core-types',
  //   'api-reference/decorators',
  //   'api-reference/lifecycle-hooks',
  // ],
  // architecture: [
  //   'architecture/architecture-overview',
  // ],
  // extensions: [
  //   'extensions/express',
  //   'extensions/socket-io',
  // ],
  // developer: [
  //   'developer/vscode-extension',
  // ]
};

export default sidebars;
