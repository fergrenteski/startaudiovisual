// ListaEventos.tsx
import React from 'react';
import { Grid } from '@mui/material';
import EventoCard from './EventoCard';

const eventos = [
    {
        title: 'Congresso Médico',
        subtitle: 'Conferência',
        image: 'evento.jpeg',
        description: "Fornecemos equipamentos de áudio, vídeo e iluminação para a maior conferência de tecnologia do país.",
        date: "20 de Julho de 2025",
        location: "Expo Center Norte, São Paulo"
    },
    {
        title: 'Feira de Saúde',
        subtitle: 'Exposição',
        image: 'evento.jpeg',
        description: "Fornecemos equipamentos de áudio, vídeo e iluminação para a maior conferência de tecnologia do país.",
        date: "20 de Julho de 2025",
        location: "Expo Center Norte, São Paulo"
    },
    {
        title: "Conferência TechSummit",
        subtitle: "Corporativo",
        image: 'evento.jpeg',
        description: "Fornecemos equipamentos de áudio, vídeo e iluminação para a maior conferência de tecnologia do país.",
        date: "20 de Julho de 2025",
        location: "Expo Center Norte, São Paulo"
    },
    {
        title: "Conferência TechSummit",
        subtitle: "Corporativo",
        image: 'evento.jpeg',
        description: "Fornecemos equipamentos de áudio, vídeo e iluminação para a maior conferência de tecnologia do país.",
        date: "20 de Julho de 2025",
        location: "Expo Center Norte, São Paulo"
    },
    {
        title: "Conferência TechSummit",
        subtitle: "Corporativo",
        image: 'evento.jpeg',
        description: "Fornecemos equipamentos de áudio, vídeo e iluminação para a maior conferência de tecnologia do país.",
        date: "20 de Julho de 2025",
        location: "Expo Center Norte, São Paulo"
    },
    {
        title: "Conferência TechSummit",
        subtitle: "Corporativo",
        image: 'evento.jpeg',
        description: "Fornecemos equipamentos de áudio, vídeo e iluminação para a maior conferência de tecnologia do país.",
        date: "20 de Julho de 2025",
        location: "Expo Center Norte, São Paulo"
    },
];

const ListaEventos: React.FC = () => {
    return (
        <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 1, sm: 2, md: 3 }}>
            {eventos.map((evento, index) => (
                <Grid size={1} key={index} sx={{ mt: { xs: 1, sm: 0, md: 0 }}}>
                    <EventoCard
                        title={evento.title}
                        subtitle={evento.subtitle}
                        image={evento.image}
                        description={evento.description}
                        location={evento.location}
                        date={evento.date}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default ListaEventos;
