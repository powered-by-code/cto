/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://cubeunity.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: './public',
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://cubeunity.com/server-sitemap.xml',
    ],
  },
} 