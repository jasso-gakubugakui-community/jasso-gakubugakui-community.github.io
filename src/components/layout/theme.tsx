import React from "react";
import '@fontsource/noto-sans-jp'
import '@fontsource/roboto'

import { CssBaseline } from "@material-ui/core";
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/core/styles";

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