import React from "react";

import { Box, Container, Typography, Toolbar } from "@material-ui/core";

import { MediaButtons } from "../button/mediaButtons";

export const Footer = () => {

    const currentYear: number = new Date().getFullYear()
    const websiteStartYear: number = 2022

    const copyrightYears: string = currentYear == websiteStartYear ? websiteStartYear.toString() : `${websiteStartYear} - ${currentYear}`

    return (
        <Container maxWidth='lg'>
            <Toolbar disableGutters >
                <Box flexGrow={1} >
                    <Typography >
                        Copyright © {copyrightYears} JASSO学部学位取得型奨学生コミュニティ | All Rights Reserved
                    </Typography>
                </Box>
                <MediaButtons sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }} />
            </Toolbar>
            <Toolbar disableGutters>
                <MediaButtons sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }} />
            </Toolbar>
        </Container>
    )
}