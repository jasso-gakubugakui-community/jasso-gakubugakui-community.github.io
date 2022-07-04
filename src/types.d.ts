export type SEOProps = {
    title: string
    description?: string
    image?: string
    article?: boolean
    lang?: string
    meta?: Meta
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
        }
    }
}
