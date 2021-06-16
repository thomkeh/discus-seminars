/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'DISCUS PhD Seminar',
  tagline: 'Dinosaurs are cool, sharing your interests is cooler.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'DISCUS', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'DISCUS Seminars',
      logo: {
        alt: 'DISCUS Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          href: 'https://github.com/D-I-S-C-U-S',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/fYfDgHvRxb',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/D-I-S-C-U-S',
            }
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DISCUS.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} DISCUS`,
          },
          path: './blog',
          routeBasePath: '/',
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/D-I-S-C-U-S/discus-seminars/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};