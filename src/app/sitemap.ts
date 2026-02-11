import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.pankajharwansh.com'

    // Define your routes here
    const routes = [
        '',
        '/about',
        '/contact',
        '/company/bni',
        '/company/tab',
        '/company/corporate-connections',
        '/vcard',
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))
}
