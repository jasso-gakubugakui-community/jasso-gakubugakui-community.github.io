import React from "react";

import { Box, SxProps, Button, IconButton } from "@mui/material";
import { Email, Twitter } from "@mui/icons-material";
import { graphql, useStaticQuery } from "gatsby";

import { NavStack } from "../stack/navStack";

export const JoinCommunityButton = () => {
    return (
        <Button href="/community"
            variant="contained">
            Join the Community
        </Button>
    )
}

export const MediaButtons = (props: { sx?: SxProps }) => {

    const { site } = useStaticQuery<MediaQuery>(query);

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
    return (<NavStack sx={props.sx}><EmailButton /><TwitterButton /></NavStack>)
}

export const ContactButton = (props: { children: React.ReactNode, href: string }) => {

    return (
        <Button color='secondary' variant="contained" href={props.href} style={{ textTransform: 'none' }} target='_blank' rel="noreferrer">
            {props.children}
        </Button>
    )
}

export const ContactUsButton = () => {
    const { site } = useStaticQuery<MediaQuery>(query);
    const mail_link: string = `mailto:${site.siteMetadata.email}`

    return (
        <ContactButton href={mail_link}>
            Contact Us
        </ContactButton>
    )
}

export const FollowUsOnTwitterButton = () => {
    const { site } = useStaticQuery<MediaQuery>(query);
    const twitter_link: string = `https://twitter.com/${site.siteMetadata.twitterUsername.slice(1)}`
    return (
        <ContactButton href={twitter_link}>
            Follw us on Twitter
        </ContactButton>
    )
}

const query = graphql`
query Media {
    site {
        siteMetadata {
            twitterUsername
            email
        }
    }
}
`;