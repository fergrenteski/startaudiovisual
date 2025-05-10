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
    Slide,
} from '@mui/material';
import Flag from 'react-world-flags';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTranslation } from "react-i18next";
import navLinks from './data/navLinksData';

type HeaderProps = {
    toggleTheme: () => void;
    toggleLanguage: () => void;
};

export default function Header({ toggleTheme, toggleLanguage }: HeaderProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const { t, i18n } = useTranslation();

    // Estado para controle da visibilidade
    const [show, setShow] = React.useState(true);
    const lastScrollY = React.useRef(0);

    React.useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                setShow(false); // esconde ao rolar para baixo
            } else {
                setShow(true); // mostra ao rolar para cima
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Slide appear={false} direction="down" in={show}>
                <AppBar
                    position="sticky"
                    elevation={0}
                    sx={{
                        backgroundColor: theme.palette.background.paper,
                        zIndex: theme.zIndex.drawer + 1,
                        transition: 'transform 0.3s ease-in-out',
                    }}
                >
                    <Toolbar sx={{ justifyContent: 'space-between', backgroundColor: 'background.paper', margin: { lg: '0 15%', md: '0 10%' } }}>
                        <Typography variant="h6" sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                            <img src="/logo.png" alt="Logo" style={{ height: 40 }} />
                        </Typography>

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
                                            {t(`header.nav.${link.label}`)}
                                        </Link>
                                    ))}
                                </Box>
                                <IconButton sx={{ ml: 2, color: theme.palette.mode === 'dark' ? 'white' : 'black' }} onClick={toggleTheme}>
                                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                                </IconButton>
                                <IconButton onClick={toggleLanguage}>
                                    {i18n.language === 'pt' ? (
                                        <Flag code="BR" style={{ width: 24, height: 24 }} />
                                    ) : (
                                        <Flag code="US" style={{ width: 24, height: 24 }} />
                                    )}
                                </IconButton>
                            </>
                        )}

                        {isMobile && (
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <IconButton sx={{ ml: 2, color: theme.palette.mode === 'dark' ? 'white' : 'black' }} onClick={toggleTheme}>
                                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                                </IconButton>
                                <IconButton onClick={toggleLanguage}>
                                    {i18n.language === 'pt' ? (
                                        <Flag code="BR" style={{ width: 24, height: 24 }} />
                                    ) : (
                                        <Flag code="US" style={{ width: 24, height: 24 }} />
                                    )}
                                </IconButton>
                                <IconButton onClick={() => setDrawerOpen(true)} edge="end">
                                    <MenuIcon />
                                </IconButton>
                            </Box>
                        )}
                    </Toolbar>
                </AppBar>
            </Slide>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                sx={{ zIndex: theme.zIndex.drawer + 2 }} // <- Aqui está o ajuste
            >
            <Box sx={{ width: 250 }} role="presentation" onClick={() => setDrawerOpen(false)}>
                    <List>
                        {navLinks.map((link) => (
                            <ListItem key={link.label} disablePadding>
                                <ListItemButton component="a" href={link.href}>
                                    <ListItemText primary={t(`header.nav.${link.label}`)} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                        <Divider />
                        <ListItem>
                            <Button variant="contained" fullWidth color="primary" href="#contato">
                                {t('banner.button')}
                            </Button>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </>
    );
}
