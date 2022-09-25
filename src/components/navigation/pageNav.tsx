import React from "react";
import { Home, NavigateNext } from "@mui/icons-material";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";

export const PageNav = (props: { pageName: string }) => {
    return (
        <Box my={2}>
            <Breadcrumbs separator={<NavigateNext fontSize="small" />}>
                <Link underline="hover" color='inherit' href="/">
                    <Box flexWrap='wrap' alignItems='center' display='flex'>
                        <Home fontSize="small" /> Home
                    </Box>
                </Link>
                <Typography color="text.primary">{props.pageName}</Typography>
            </Breadcrumbs>
        </Box>
    )
}