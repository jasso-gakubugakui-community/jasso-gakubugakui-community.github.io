import React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

import { SEOProps, SEOQuery } from '../types'

const SEO = ({ title, description = "", image = "", lang = "ja", meta = [] }: SEOProps) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery<SEOQuery>(query)

  const {
    title: defaultTitle,
    titleTemplate,
    description: defaultDescription,
    siteUrl,
    image: defaultImage,
    twitterUsername,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
    twitterUsername
  }

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate} meta={[
      {
        name: `description`,
        content: `${seo.description}`,
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
        property: `og:image`,
        content: `${siteUrl}/logo.png`,
      },
      {
        property: `og:title`,
        content: seo.title,
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
        name: `thumbnail`,
        content: `${siteUrl}/logo.png`,
      },
      {
        name: `twitter:title`,
        content: title,
      },
      {
        name: `twitter:description`,
        content: seo.description,
      },
      {
        property: `og:type`,
        content: `website`,
      },
    ].concat(meta)} />
  )
}

export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
      }
    }
  }
`