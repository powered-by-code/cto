/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ctoprime.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: './public',
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://ctoprime.com/server-sitemap.xml',
    ],
  },
} 