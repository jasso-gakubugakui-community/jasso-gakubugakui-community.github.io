import React from "react";

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
        }
    })

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {props.children}
        </ThemeProvider>
    )
}