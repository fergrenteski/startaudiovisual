// components/Secao.tsx
import React from 'react';
import { Box, Container, Typography } from '@mui/material';

type SecaoProps = {
    id?: string;
    titulo: string;
    subtitulo?: string;
    children?: React.ReactNode;
    backgroundColor?: string;
};

const Secao = ({ id, titulo, subtitulo, children, backgroundColor = 'background.paper' }: SecaoProps) => {
    return (
        <Box id={id} sx={{ py: 5, backgroundColor, textAlign: 'center' }}>
            <Container maxWidth="lg">
                <Typography variant="h4" gutterBottom sx={{ paddingBottom: 5 }}>
                    {titulo}
                </Typography>
                {subtitulo && (
                    <Typography variant="body1" color="text.secondary"  sx={{ pb: 5, textAlign: 'center', width: {xs: '95%', md: '70%'}, margin: '0 auto' }}>
                        {subtitulo}
                    </Typography>
                )}
                {children}
            </Container>
        </Box>
    );
};

export default Secao;
