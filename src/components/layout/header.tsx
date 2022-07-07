import React from "react";

import { AppBar, Toolbar, Container, Typography, Box, Button, IconButton, Menu, MenuItem } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material"

import { JoinCommunityButton } from "../button/mediaButtons";
import { PageItem } from "../../types";

const pages: PageItem[] = [{ name: 'About', href: "/about" }, { name: 'Community Guideline', href: "/community-guideline" }]

export const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="sticky" color="transparent">
            <Container maxWidth='lg'>
                <Toolbar disableGutters>
                    <Box flexGrow={1}>
                        <Button href="/" style={{ textTransform: 'none' }} color='inherit'>
                            JASSO学部学位取得型奨学生コミュニティ
                        </Button>
                    </Box>
                    <Box flexGrow={0} sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {pages.map(page => (
                            <Button href={page.href} style={{ textTransform: 'none' }} color='inherit'>
                                {page.name}
                            </Button>
                        ))}
                        <JoinCommunityButton />
                    </Box>
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
                                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    )
}