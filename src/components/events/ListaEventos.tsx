// ListaEventos.tsx
import React from 'react';
import { Grid } from '@mui/material';
import EventoCard from './EventoCard';
import {useEventosData} from "./data/eventosData";

const ListaEventos: React.FC = () => {

    const eventos = useEventosData();

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
