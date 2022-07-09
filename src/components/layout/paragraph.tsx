import React from "react";

import { Typography } from "@mui/material";

export const Paragraph = (props: { children: React.ReactNode }) => {
    return (
        <Typography variant="body1" component='p' paragraph>
            {props.children}
        </Typography>
    )
}

export const PageSectionHeader = (props: { children: React.ReactNode }) => {
    return (
        <Typography variant="h4" gutterBottom color='primary' fontWeight="bold" mt={4}>{props.children}</Typography>
    )
}

export const PageSubsectionHeader = (props: { children: React.ReactNode }) => {
    return (
        <Typography variant="h6" gutterBottom color='primary' fontWeight="bold" mt={4}>{props.children}</Typography>
    )
}