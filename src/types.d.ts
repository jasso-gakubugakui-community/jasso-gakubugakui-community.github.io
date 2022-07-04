export type SEOProps = {
    title: string
    description?: string
    image?: string
    article?: boolean
    lang?: string
    meta?: React.DetailedHTMLProps<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>[]
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
