// components/ServicoCard.tsx
import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';

type ServicoCardProps = {
    icon: SvgIconComponent;
    title: string;
    description: string;
    iconColor: string;
};

const ServicoCard = ({ icon: Icon, title, description, iconColor }: ServicoCardProps) => {
    return (
        <Paper
            elevation={3}
            sx={{
                p: 4,
                borderRadius: 4,
                textAlign: 'center',
                height: '100%',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 6,
                    '& .icon-wrapper': {
                        transform: 'scale(1.1)',
                    },
                },
            }}
        >
            <Box
                className="icon-wrapper"
                sx={{
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    backgroundColor: iconColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px auto',
                    animation: 'bounce 1s infinite, rotateAnimation 1.25s ease-in-out infinite', // Animações contínuas
                    '@keyframes bounce': {
                        '0%': {
                            transform: 'scale(1)',
                        },
                        '50%': {
                            transform: 'scale(1.2)',
                        },
                        '100%': {
                            transform: 'scale(1)',
                        },
                    },
                    '@keyframes rotateAnimation': {
                        '0%': {
                            transform: 'rotate(-5deg)',
                        },
                        '50%': {
                            transform: 'rotate(5deg)',
                        },
                        '100%': {
                            transform: 'rotate(-5deg)',
                        },
                    },
                }}
            >
                <Icon sx={{ color: 'white', fontSize: 32 }} />
            </Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {description}
            </Typography>
        </Paper>
    );
};

export default ServicoCard;
