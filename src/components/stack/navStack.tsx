import { Stack, SxProps } from "@mui/material";
import React from "react";

export const NavStack = (props: { sx?: SxProps, children: React.ReactNode }) => {
    return (
        <Stack flexGrow={0} direction="row" spacing={2} sx={props.sx}>
            {props.children}
        </Stack>
    )
}