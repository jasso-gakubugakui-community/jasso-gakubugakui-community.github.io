import React from "react";

import { Box, Typography } from "@mui/material";

export const Paragraph = (props: { children: React.ReactNode }) => {
    return (
        <Typography variant="body1" component='p' paragraph>
            {props.children}
        </Typography>
    )
}

export const PageSectionHeading = (props: { children: React.ReactNode }) => {
    return (
        <Box>
            <Typography variant="h4"
                gutterBottom
                color='primary'
                fontWeight="bold"
                mt={4}
                sx={{ display: { xs: 'none', md: 'flex' } }}>
                {props.children}
            </Typography>
            <Typography variant="h5"
                gutterBottom
                color='primary'
                fontWeight="bold"
                mt={4}
                sx={{ display: { xs: 'flex', md: 'none' } }}>
                {props.children}
            </Typography>
        </Box>
    )
}

export const PageSubsectionHeading = (props: { children: React.ReactNode }) => {
    return (
        <Box>
            <Typography variant="h5"
                gutterBottom
                color='primary'
                fontWeight="bold"
                mt={4}
                sx={{ display: { xs: 'none', md: 'flex' } }}>
                {props.children}
            </Typography>
            <Typography variant="h6"
                gutterBottom
                color='primary'
                fontWeight="bold"
                mt={4}
                sx={{ display: { xs: 'flex', md: 'none' } }}>
                {props.children}
            </Typography>
        </Box>
    )
}