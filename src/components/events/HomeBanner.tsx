import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { Typewriter } from 'react-simple-typewriter';
import { keyframes } from '@emotion/react';
import {useTranslation} from "react-i18next";

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0) scale(1);
  }
  40% {
    transform: translateY(-2px) scale(1.02);
  }
  60% {
    transform: translateY(-1px) scale(1.01);
  }
`;


const HomeBanner = () => {
    const [showSecond, setShowSecond] = useState(false);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        setShowSecond(false); // reseta quando idioma muda

        const totalDuration = 11 * 100 + 500; // 1600ms

        const timer = setTimeout(() => {
            setShowSecond(true);
        }, totalDuration);

        return () => clearTimeout(timer);
    }, [i18n.language]); // <- depende da linguagem

    const currentLang = i18n.language;

    return (
        <Container
            maxWidth="lg"
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: { xs: 'column', md: 'row' },
                pt: 8,
                minHeight: { xs: 'auto', md: '70dvh' },
                textAlign: 'center',
                margin: { md: '0 5rem' },
            }}
        >
            <Box
                sx={{
                    flex: 1,
                    textAlign: { xs: 'center', md: 'left' },
                    margin: { xs: '3rem 0' },
                }}
            >
                <Typography variant="h2" component="h1" sx={{ minHeight: '3.5rem' }}>
                    <Typewriter
                        key={`title-${currentLang}`}
                        words={[t('banner.title')]}
                        loop={1}
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={1500}
                    />
                </Typography>

                <Typography
                    variant="h4"
                    component="h4"
                    color="primary"
                    sx={{ whiteSpace: 'pre-line', minHeight: '3rem', mt: 2 }}
                >
                    {showSecond && (
                        <Typewriter
                            key={`subtitle-${currentLang}`}
                            words={[t('banner.subtitle-1'), t('banner.subtitle-2')]}
                            loop={1}
                            cursor
                            typeSpeed={60}
                            deleteSpeed={50}
                            delaySpeed={500}
                        />
                    )}
                </Typography>

                <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
                    {t('banner.text-1')}
                    <Typography component="span" fontWeight="bold">
                        {t('banner.text-2')}
                    </Typography>{' '}
                    {t('banner.text-3')}
                </Typography>

                <Button
                    variant="contained"
                    color="primary"
                    href={"#contato"}
                    sx={{
                        mt: 2,
                        animation: `${bounce} 2s infinite`,
                    }}
                >
                    {t('banner.button')}
                </Button>
            </Box>

            <Box sx={{ flex: 1 }}>
                <img
                    src="/person.png"
                    alt="Banner person"
                    style={{ maxWidth: '80%', height: 'auto', objectFit: 'contain' }}
                />
            </Box>
        </Container>
    );
};

export default HomeBanner;
