import React from "react";

import { Footer } from "./footer";

export const Layout = (props: { children: React.ReactNode }) => {

    return (
        <div>
            <main>{props.children}</main>
            <Footer />
        </div>
    )
}