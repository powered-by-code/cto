import { getServerSideSitemap } from 'next-sitemap';
import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import { env } from '@/env';
import data from '@/data.json';

// Make this route compatible with static exports
export const dynamic = 'force-static';
export const revalidate = false;

type ChangefreqType = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

export async function GET() {
  // Base URL for your site
  const baseUrl = env.NEXT_PUBLIC_DOMAIN;
  
  // Initialize an array to store all URLs
  const allPages: { 
    loc: string; 
    lastmod: string; 
    changefreq: ChangefreqType; 
    priority: number; 
  }[] = [];
  
  // Add static pages
  const staticPages = findStaticPages();
  staticPages.forEach(page => {
    allPages.push({
      loc: `${baseUrl}${page === '/' ? '' : page}`,
      lastmod: new Date().toISOString(),
      changefreq: page === '/' ? 'daily' : 'weekly',
      priority: page === '/' ? 1.0 : 0.7,
    });
  });
  
  // Add dynamic pages from data.json
  // Services
  if (data.services) {
    data.services.forEach(service => {
      // Skip hidden services if the property exists
      if (!('hidden' in service) || !service.hidden) {
        allPages.push({
          loc: `${baseUrl}/services/${service.id}`,
          lastmod: new Date().toISOString(),
          changefreq: 'weekly',
          priority: 0.7,
        });
      }
    });
  }
  
  // Industries
  if (data.industries) {
    data.industries.forEach(industry => {
      // Skip hidden industries if the property exists
      if (!('hidden' in industry) || !industry.hidden) {
        allPages.push({
          loc: `${baseUrl}/industries/${industry.id}`,
          lastmod: new Date().toISOString(),
          changefreq: 'weekly',
          priority: 0.7,
        });
      }
    });
  }
  
  // Case studies
  if (data.caseStudies) {
    data.caseStudies.forEach(caseStudy => {
      // Skip hidden case studies if the property exists
      if (!('hidden' in caseStudy) || !caseStudy.hidden) {
        allPages.push({
          loc: `${baseUrl}/case-studies/${caseStudy.id}`,
          lastmod: new Date().toISOString(),
          changefreq: 'weekly',
          priority: 0.7,
        });
      }
    });
  }
  
  // Articles (from content/articles directory)
  const articlesDir = path.join(process.cwd(), 'content', 'articles');
  if (fs.existsSync(articlesDir)) {
    const articleFiles = fs.readdirSync(articlesDir);
    articleFiles.forEach(file => {
      if (file.endsWith('.md')) {
        const slug = file.replace('.md', '');
        allPages.push({
          loc: `${baseUrl}/articles/${slug}`,
          lastmod: new Date().toISOString(),
          changefreq: 'weekly',
          priority: 0.7,
        });
      }
    });
  }
  
  return getServerSideSitemap(allPages);
}

// Function to recursively find all static page.tsx files in the app directory
function findStaticPages(): string[] {
  const appDir = path.join(process.cwd(), 'src', 'app');
  return findPages(appDir);
}

function findPages(dir: string, allPages: string[] = []): string[] {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip directories that start with _ or . or server-sitemap.xml
      // Also skip dynamic route directories ([...slug], [id], etc.)
      if (!file.startsWith('_') && 
          !file.startsWith('.') && 
          file !== 'server-sitemap.xml' && 
          !file.includes('[')) {
        allPages = findPages(filePath, allPages);
      }
    } else if (file === 'page.tsx') {
      // Get relative path from app directory
      const relativePath = dir.replace(path.join(process.cwd(), 'src', 'app'), '');
      if (relativePath) {
        allPages.push(relativePath);
      } else {
        // This is the root page
        allPages.push('/');
      }
    }
  });
  
  return allPages;
} 