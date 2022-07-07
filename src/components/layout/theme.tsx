import React from "react";
import '@fontsource/noto-sans-jp'
import '@fontsource/roboto'

import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

export const MuiThemeProvider = (props: { children: React.ReactNode }) => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#00a596'
            },
            secondary: {
                main: '#f8b500'
            }
        },
        typography: {
            fontFamily: [
                '"Noto Sans JP"',
                'Roboto',
                'sans-serif',
            ].join(',')
        },
    })

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {props.children}
        </ThemeProvider>
    )
}