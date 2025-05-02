import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Link,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Divider,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

type HeaderProps = {
    toggleTheme: () => void;
};

export default function Header({ toggleTheme }: HeaderProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const navLinks = [
        { label: 'Serviços', href: '#servicos' },
        { label: 'Portfólio', href: '#portifolio' },
        { label: 'Sobre', href: '#sobre' },
    ];

    return (
        <>
            <AppBar position="static" elevation={0}>
                <Toolbar sx={{ justifyContent: 'space-between', backgroundColor: 'background.paper' }}>
                    {/* Logo */}
                    <Typography variant="h6" sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                        <img src="/logo.png" alt="Logo" style={{ height: 40 }} />
                    </Typography>

                    {/* Desktop links */}
                    {!isMobile && (
                        <>
                            <Box sx={{ display: 'flex', gap: 4 }}>
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        underline="none"
                                        color="textPrimary"
                                        variant="button"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </Box>
                            <Button variant="contained" color="primary" sx={{ ml: 2 }}>
                                Contato
                            </Button>
                            <IconButton sx={{ ml: 2, color: theme.palette.mode === 'dark' ? 'white' : 'black' }} onClick={toggleTheme} color="inherit">
                                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                            </IconButton>
                        </>
                    )}

                    {/* Mobile menu button */}
                    {isMobile && (
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton sx={{ ml: 2, color: theme.palette.mode === 'dark' ? 'white' : 'black' }} onClick={toggleTheme} color="inherit">
                                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                            </IconButton>
                            <IconButton onClick={() => setDrawerOpen(true)} edge="end">
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    )}
                </Toolbar>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <Box sx={{ width: 250 }} role="presentation" onClick={() => setDrawerOpen(false)}>
                    <List>
                        {navLinks.map((link) => (
                            <ListItem key={link.label} disablePadding>
                                <ListItemButton component="a" href={link.href}>
                                    <ListItemText primary={link.label} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                        <Divider />
                        <ListItem>
                            <Button variant="contained" fullWidth color="primary">
                                Contato
                            </Button>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </>
    );
}
