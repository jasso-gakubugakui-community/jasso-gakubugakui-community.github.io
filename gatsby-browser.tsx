import * as React from "react"
import type { GatsbyBrowser, WrapRootElementBrowserArgs } from "gatsby"

import { MuiThemeProvider } from "./src/components/layout/theme"

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
    element,
}: WrapRootElementBrowserArgs) => {
    return (
        <MuiThemeProvider>
            {element}
        </MuiThemeProvider>
    )
}