import React from "react";

export const Layout = (childeren: React.ReactNode) => {

    return (
        <div>
            <main>{childeren}</main>
            <footer>Copyright © 2022 - {new Date().getFullYear()} JASSO学部学位取得型奨学生コミュニティ | All Rights Reserved</footer>
        </div>
    )
}