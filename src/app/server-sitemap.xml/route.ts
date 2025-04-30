import { getServerSideSitemap } from 'next-sitemap';
import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export async function GET() {
  // Base URL for your site
  const baseUrl = 'https://ctoprime.com';
  
  // Function to recursively find all page.tsx files in the app directory
  const findPages = (dir: string, allPages: string[] = []): string[] => {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        // Skip directories that start with _ or . or sitemap.xml
        if (!file.startsWith('_') && !file.startsWith('.') && file !== 'sitemap.xml') {
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
  };
  
  // Start searching from app directory
  const appDir = path.join(process.cwd(), 'src', 'app');
  const allPages = findPages(appDir);
  
  // Create sitemap entries
  const fields = allPages.map(page => ({
    loc: `${baseUrl}${page === '/' ? '' : page}`,
    lastmod: new Date().toISOString(),
    changefreq: 'weekly' as const,
    priority: page === '/' ? 1.0 : 0.7,
  }));
  
  return getServerSideSitemap(fields);
} 