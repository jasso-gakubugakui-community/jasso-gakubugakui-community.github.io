import React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

import { SEOProps, SEOQuery } from '../types'

export const SEO = (props: {
  title?: string, description?: string, image?: string, lang?: string, meta?: []
}) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery<SEOQuery>(query)

  const {
    title: defaultTitle,
    titleTemplate,
    description: defaultDescription,
    siteUrl,
    image: defaultImage,
    twitterUsername,
    lang: defaultLang,
  } = site.siteMetadata

  const seo = {
    title: props.title || defaultTitle,
    description: props.description || defaultDescription,
    image: `${siteUrl}${props.image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
    twitterUsername,
    lang: props.lang || defaultLang
  }

  return (
    <Helmet htmlAttributes={{ lang: seo.lang }} title={seo.title} titleTemplate={titleTemplate} meta={
      [
        {
          name: `description`,
          content: `${seo.description}`,
        },
        {
          property: `og:title`,
          content: seo.title,
        },
        {
          property: `og:image`,
          content: seo.image,
        },
        {
          property: `og:description`,
          content: seo.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:title`,
          content: seo.title,
        },
        {
          name: `twitter:description`,
          content: seo.description,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: seo.twitterUsername,
        },
        {
          name: `twitter:image`,
          content: seo.image
        },
      ].concat(props.meta!)
    } />
  )
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl
        defaultImage: image
        twitterUsername
        lang
      }
    }
  }
`