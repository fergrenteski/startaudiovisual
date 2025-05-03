import React from 'react';
import { Box } from '@mui/material';

const logos = [
    '/brands/1.svg',
    '/brands/2.svg',
    '/brands/3.svg',
    '/brands/4.svg',
    '/brands/5.svg',
    '/brands/6.svg',
    '/brands/7.svg',
    '/brands/8.svg',


];

const BannerAnimadoMarcas = () => {
    return (
        <Box
            sx={{
                height: '100px',
                overflow: 'hidden',
                backgroundColor: 'theme.palette.background.paper',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
            }}
        >
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
                {/* Duplicamos o conteúdo para criar um loop contínuo */}
                {[...logos, ...logos].map((src, index) => (
                    <Box
                        key={index}
                        component="img"
                        src={src}
                        alt={`logo-${index}`}
                        sx={{
                            height: '60px',
                            mx: 4,
                            objectFit: 'contain',
                            flexShrink: 0,
                            margin: '0 50px',
                            color: 'white',
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default BannerAnimadoMarcas;
