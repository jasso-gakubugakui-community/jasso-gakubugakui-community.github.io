import React from "react";

import { AppBar, Toolbar, Container, Typography, Box, Button, IconButton, Menu, MenuItem, Stack, Divider, Link } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material"

import { JoinCommunityButton } from "../button/mediaButtons";
import { NavStack } from "../stack/navStack";
import { PageItem } from "../../types";
import { graphql, useStaticQuery } from "gatsby";

const pages: PageItem[] = [];// [{ name: 'About', href: "/about" }]

export const Header = () => {
    const { site } = useStaticQuery<HeaderQuery>(query)

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="sticky" color="transparent" sx={{ backdropFilter: "blur(20px)" }}>
            <Container maxWidth='lg'>
                <Toolbar disableGutters>
                    <Box flexGrow={1}>
                        <Link href="/" style={{ textTransform: 'none' }} color='inherit' underline="none" >
                            {site.siteMetadata.title}
                        </Link>
                    </Box>
                    <NavStack sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {pages.map(page => (
                            <Button href={page.href} style={{ textTransform: 'none' }} color='inherit'>
                                {page.name}
                            </Button>
                        ))}
                        <JoinCommunityButton />
                    </NavStack>
                    <Box flexGrow={0} sx={{ display: { xs: 'block', md: 'none' } }}>
                        <IconButton
                            aria-label="menu app"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit">
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name} href={page.href} >
                                    <Link href={page.href} underline="none" color='inherit'>
                                        <Typography textAlign="center">{page.name}</Typography>
                                    </Link>

                                </MenuItem>
                            ))}
                            <Divider />
                            <MenuItem key="Join Community">
                                <Link href='/community' underline="none" color='inherit'>
                                    <Typography textAlign='center'>
                                        Join the Community
                                    </Typography>
                                </Link>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    )
}

const query = graphql`
    query Header {
        site {
            siteMetadata { 
                title
            }
        }
    }
`