// HomeBanner.jsx
import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';

const HomeBanner = () => {
    return (
        <>
            {/* Banner Content */}
            <Container
                maxWidth="lg"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: { xs: 'column', md: 'row' },
                    py: 8,
                    minHeight: { xs: 'auto', md: '85dvh' }, // evita corte no mobile
                    textAlign: 'center',
                    margin: { md: '0 5rem' },
                }}
            >
                {/* Text Content */}
                <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' },
                            margin: { xs: '3rem 0' },}}>
                    <Typography variant="h2" component="h1" gutterBottom>
                        SEU EVENTO! <Typography  variant="h4" component="h1" color="primary" >É NOSSO TAMBÉM!</Typography>
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Aqui na  <Typography component="span" fontWeight="bold"> Start Audio Visual</Typography> entregamos o máximo de qualidade, tecnologia e profissionalismo,
                        para que seu evento se torne um sucesso e garanta a perfeição do audiovisual. Conto conosco,
                        entre em contato e fazemos o possível para tornar sonhos em realidade.
                    </Typography>
                    <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                        CONTATO
                    </Button>
                </Box>

                {/* Image */}
                <Box sx={{ flex: 1 }}>
                    <img
                        src="/person.png" // Substitua pelo caminho real
                        alt="Banner person"
                        style={{ maxWidth: '80%', height: 'auto', objectFit: 'contain' }}
                    />
                </Box>
            </Container>
        </>
    );
};

export default HomeBanner;
