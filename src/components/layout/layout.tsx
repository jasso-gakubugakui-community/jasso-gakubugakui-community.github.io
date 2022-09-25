import React from "react";

import { Header } from "./header"
import { Footer } from "./footer";

export const Layout = (props: { children: React.ReactNode }) => {

    return (
        <div>
            <Header />
            <main>{props.children}</main>
            <Footer />
        </div>
    )
}