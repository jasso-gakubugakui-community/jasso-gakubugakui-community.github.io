import React from "react";

import { Box, IconButton } from "@material-ui/core";
import { Email, Twitter } from "@material-ui/icons";
import { graphql, useStaticQuery } from "gatsby";



export const MediaButtons = () => {

    const { site } = useStaticQuery<MediaQuery>(
        graphql`
            query Media {
                site {
                    siteMetadata {
                        twitterUsername
                        email
                    }
                }
            }
            `);

    const EmailButton = () => {

        const mail_link: string = `mailto:${site.siteMetadata.email}`
        return (
            <IconButton aria-label="email link" href={mail_link}>
                <Email />
            </IconButton>
        )
    };

    const TwitterButton = () => {
        const twitter_link: string = `https://twitter.com/${site.siteMetadata.twitterUsername.slice(1)}`
        return (
            <IconButton aria-label="twitter link" href={twitter_link}>
                <Twitter />
            </IconButton>
        )
    };
    return (<Box><EmailButton /><TwitterButton /></Box>)
}

