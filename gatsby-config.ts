import type { GatsbyConfig } from "gatsby";
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `JASSO海外学部学位取得型奨学生コミュニティ`,
    titleTemplate: "%s | JASSO海外学部学位取得型奨学生コミュニティ",
    siteUrl: `https://jasso-gakubugakui-community.github.io`,
    description: "JASSO海外学部学位取得型奨学生コミュニティウェブサイト",
    image: "/logo_v1.png",
    twitterUsername: "@JASSO_UGGroup",
    lang: "ja",
    email: "jasso.gakubugakui.community@gmail.com"
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": process.env.ACCESS_TOKEN,
      "spaceId": process.env.SPACE_ID
    }
  }, "gatsby-plugin-postcss", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": process.env.TRACKING_ID
    }
  }, "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
    `gatsby-plugin-material-ui`,]
};

export default config;
