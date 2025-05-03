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
        <Box id={id} sx={{ py: 1, backgroundColor, textAlign: 'center' }}>
            <Container maxWidth="lg">
                <Typography variant="h4" gutterBottom sx={{ paddingBottom: 5 }}>
                    {titulo}
                </Typography>
                {subtitulo && (
                    <Typography variant="body1" color="text.secondary">
                        {subtitulo}
                    </Typography>
                )}
                {children}
            </Container>
        </Box>
    );
};

export default Secao;
