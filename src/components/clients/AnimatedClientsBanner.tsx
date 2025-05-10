import React from 'react';
import { Box, useTheme } from '@mui/material';

const logos = [
    { light: '/brands/sus.png', dark: '/brands/sus-dark.png' },
    { light: '/brands/cicb.png', dark: '/brands/cicb-dark.png' },
    { light: '/brands/evo.png', dark: '/brands/evo-dark.png' },
    { light: '/brands/opas.png', dark: '/brands/opas-dark.png' },
    { light: '/brands/educacao.png', dark: '/brands/educacao-dark.png' },
    { light: '/brands/esfera.png', dark: '/brands/esfera-dark.png' },
    { light: '/brands/viasoft.png', dark: '/brands/viasoft-dark.png' },
];

const AnimatedClientsBanner = () => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    return (
        <Box
            sx={{
                position: 'relative',
                height: '80px',
                overflow: 'hidden',
                backgroundColor: theme.palette.background.paper,
                display: 'flex',
                alignItems: 'center',
            }}
        >
            {/* Fade esquerda */}
            <Box
                sx={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: '20px',
                    zIndex: 1,
                    background: `linear-gradient(to right, ${theme.palette.background.paper}, transparent)`,
                }}
            />

            {/* Fade direita */}
            <Box
                sx={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: '20px',
                    zIndex: 1,
                    background: `linear-gradient(to left, ${theme.palette.background.paper}, transparent)`,
                }}
            />

            <Box
                sx={{
                    display: 'flex',
                    animation: 'scroll 30s linear infinite',
                    whiteSpace: 'nowrap',
                    '@keyframes scroll': {
                        '0%': {
                            transform: 'translateX(0)',
                        },
                        '100%': {
                            transform: 'translateX(-50%)',
                        },
                    },
                }}
            >
                {[...logos, ...logos].map((logo, index) => (
                    <Box
                        key={index}
                        component="img"
                        src={isDarkMode ? logo.dark : logo.light}
                        alt={`logo-${index}`}
                        sx={{
                            height: '60px',
                            width: '100px',
                            mx: 4,
                            objectFit: 'contain',
                            flexShrink: 0,
                            margin: { sm: '0 30px', md: '0 50px' },
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default AnimatedClientsBanner;
