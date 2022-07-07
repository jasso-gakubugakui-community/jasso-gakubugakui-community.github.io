import React from "react";

import { Box, BoxProps, Button, IconButton } from "@mui/material";
import { Email, Twitter } from "@mui/icons-material";
import { graphql, useStaticQuery } from "gatsby";


export const JoinCommunityButton = () => {
    return (
        <Button href="https://docs.google.com/forms/d/e/1FAIpQLSdneBto7JTJXgOEHn5e9xf4zNjQL3m_gdPcsIHJ-br_QJdjcw/viewform"
            variant="contained"
            target='_blank'
            rel="noreferrer">
            Join the Community
        </Button>
    )
}

export const MediaButtons = (props: { sx?: BoxProps }) => {

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
            <IconButton aria-label="email link" href={mail_link} >
                <Email />
            </IconButton>
        )
    };

    const TwitterButton = () => {
        const twitter_link: string = `https://twitter.com/${site.siteMetadata.twitterUsername.slice(1)}`
        return (
            <IconButton aria-label="twitter link" href={twitter_link} target='_blank' rel="noreferrer">
                <Twitter />
            </IconButton>
        )
    };
    return (<Box sx={props.sx}><EmailButton /><TwitterButton /><JoinCommunityButton /></Box>)
}

