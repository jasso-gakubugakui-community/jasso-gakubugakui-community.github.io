export type SEOProps = {
    title: string
    description?: string
    image?: string
    lang?: string
    meta?: ({ name: string; content: string; property?: undefined; } | { property: string; content: string; name?: undefined; })[]
}

export type SEOQuery = {
    site: {
        siteMetadata: {
            title: string
            titleTemplate: string
            siteUrl: string
            description: string
            image: string
            twitterUsername: string
            lang: string
        }
    }
}
