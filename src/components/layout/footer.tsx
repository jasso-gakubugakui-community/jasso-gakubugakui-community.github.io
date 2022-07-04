import React from "react";

import { Box, Container, Typography } from "@material-ui/core";

export const Footer = () => {

    const currentYear: number = new Date().getFullYear()
    const websiteStartYear: number = 2022

    const copyrightYears: string = currentYear == websiteStartYear ? websiteStartYear.toString() : `${websiteStartYear} - ${currentYear}`

    return (
        <Container maxWidth='xl'>
            <Typography>
                Copyright © {copyrightYears} JASSO学部学位取得型奨学生コミュニティ | All Rights Reserved
            </Typography>
        </Container>
    )
}