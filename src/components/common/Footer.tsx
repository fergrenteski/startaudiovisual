import React from 'react';
import {Box, Container, Grid, Typography, Link, IconButton, useTheme} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import {useTranslation} from "react-i18next";

const Footer = () => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    const { t } = useTranslation();

    return (
        <Box
            sx={{
                backgroundColor: isDarkMode ? theme.palette.grey[900] : theme.palette.grey[900],
                color: isDarkMode ? theme.palette.grey[100] : theme.palette.grey[100],
                py: 4,
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="space-between">
                    {/* Logo e Descrição */}
                    <Grid size={{xs: 12, sm: 4}}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                            {t('footer.info.title')}
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1 }}>
                            {t('footer.info.subtitle')}
                        </Typography>
                    </Grid>

                    {/* Navegação */}
                    <Grid size={{xs: 12, sm: 4}}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                            {t('footer.nav.title')}
                        </Typography>
                        <Box sx={{ mt: 1 }}>
                            <Link href="#" color="inherit" underline="hover" display="block">{t('footer.nav.home')}</Link>
                            <Link href="#servicos" color="inherit" underline="hover" display="block">{t('footer.nav.services')}</Link>
                            <Link href="#portfolio" color="inherit" underline="hover" display="block">{t('footer.nav.portfolio')}</Link>
                            <Link href="#contato" color="inherit" underline="hover" display="block">{t('footer.nav.contact')}</Link>
                        </Box>
                    </Grid>

                    {/* Redes Sociais */}
                    <Grid size={{xs: 12, sm: 4}}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                            {t('footer.social.title')}
                        </Typography>
                        <Box sx={{ mt: 1 }}>
                            <IconButton
                                component="a"
                                href="https://www.instagram.com/startaudiovisual"
                                target="_blank"
                                rel="noopener"
                                sx={{ color: '#fff'}}
                            >
                                <InstagramIcon />
                            </IconButton>
                            <IconButton
                                component="a"
                                href="https://www.facebook.com/startaudiovisual"
                                target="_blank"
                                rel="noopener"
                                sx={{ color: '#fff'}}
                            >
                                <FacebookIcon />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>

                {/* Copyright */}
                <Box sx={{ textAlign: 'center', mt: 4 }}>
                    <Typography variant="body2" color="inherit">
                        © {new Date().getFullYear()} Start Audio Visual. {t('footer.copyright')}
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
