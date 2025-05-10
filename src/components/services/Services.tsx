import React from 'react';
import chroma from 'chroma-js';
import { Grid, useTheme } from '@mui/material';
import ServiceCard from './ServiceCard';
import {useServices} from "./data/servicesData";

const Services = () => {
    const theme = useTheme();

    // Define uma cor de ícone mais forte para o modo escuro
    const getIconColor = (defaultColor: string) => {
        return theme.palette.mode === 'dark' ? saturateColor(defaultColor) : defaultColor;
    };

    // Função para saturar a cor
        const saturateColor = (color: string) => {
            return chroma(color).darken(1).saturate(1).hex();
        };

    const servicos = useServices();

    return (
        <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 1, sm: 2, md: 3 }}>
            {servicos.map((servico, index) => (
                <Grid size={1} key={index} sx={{ mt: { xs: 1, sm: 0, md: 0 }}}>
                    <ServiceCard
                        icon={servico.icon}
                        title={servico.title}
                        description={servico.description}
                        iconColor={getIconColor(servico.iconColor)}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default Services;
