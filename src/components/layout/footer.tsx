import React from "react";

import { Container, Box, Typography, Toolbar, Divider, Paper } from "@mui/material";
import { grey } from "@mui/material/colors";

import { MediaButtons, JoinCommunityButton } from "../button/mediaButtons";
import { graphql, useStaticQuery } from "gatsby";

export const Footer = () => {

    const { site } = useStaticQuery<FooterQuery>(query)
    const currentYear: number = new Date().getFullYear()
    const websiteStartYear: number = 2022

    const copyrightYears: string = currentYear == websiteStartYear ? websiteStartYear.toString() : `${websiteStartYear} - ${currentYear}`

    return (
        <Paper sx={{ bgcolor: grey[100] }} elevation={0}>
            <Container maxWidth='lg' >
                <Toolbar disableGutters>
                    <Box mt={4}>
                        <JoinCommunityButton />
                    </Box>
                </Toolbar>
                <Box mt={4} mb={2}>
                    <Divider />
                </Box>
                <Toolbar disableGutters >
                    <Box flexGrow={1}>
                        <Typography >
                            Copyright © {copyrightYears} {site.siteMetadata.title} | All Rights Reserved
                        </Typography>
                    </Box>
                    <MediaButtons sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }} />
                </Toolbar>
                <Toolbar disableGutters>
                    <MediaButtons sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }} />
                </Toolbar>
            </Container>
        </Paper>
    )
}

const query = graphql`
    query Footer {
        site {
            siteMetadata { 
                title
            }
        }
    }
`