/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ctoprime.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: './public',
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://ctoprime.com/server-sitemap.xml',
    ],
  },
} 