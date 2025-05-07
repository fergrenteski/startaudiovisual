import * as React from 'react';
import {
    Timeline
} from '@mui/lab';
import { useMediaQuery, useTheme } from '@mui/material';
import {
    Business as BusinessIcon,
    LocationCity as LocationCityIcon,
    Event as EventIcon,
    LocalHospital as LocalHospitalIcon,
    Coronavirus as CoronavirusIcon,
    Computer as ComputerIcon,
    Build as BuildIcon,
} from '@mui/icons-material';
import {AnimatedTimelineItem} from "./AnimatedTimelineItem";

const events = [
    { year: '2001', title: 'Abertura da Empresa', description: 'Fundação da sede principal e início das operações.', icon: <BusinessIcon /> },
    { year: '2005', title: 'Filial em Brasília', description: 'Expansão para a capital do Brasil.', icon: <LocationCityIcon /> },
    { year: '2012', title: 'Rio + 20 (Maior evento da empresa)', description: 'Participação no maior evento da ONU sobre sustentabilidade.', icon: <EventIcon /> },
    { year: '2016', title: '+ Médicos Brasília', description: 'Suporte operacional ao programa Mais Médicos.', icon: <LocalHospitalIcon /> },
    { year: '2020', title: 'Pandemia', description: 'Adaptação total ao cenário pandêmico com foco em saúde pública.', icon: <CoronavirusIcon /> },
    { year: '2021', title: 'Eventos Online', description: 'Transformação digital com foco em eventos virtuais.', icon: <ComputerIcon /> },
    { year: '2023', title: 'Reconstrução', description: 'Reestruturação da empresa para o novo mercado.', icon: <BuildIcon /> },
];

export default function VerticalTimeline() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Timeline
            position={isMobile ? 'right' : 'alternate'}
            sx={
                isMobile
                    ? {
                        [`& .MuiTimelineItem-root:before`]: {
                            flex: 0,
                            padding: 0,
                        },
                        pl: 0,
                    }
                    : {}
            }
        >
            {events.map((event, index) => (
                <AnimatedTimelineItem
                    key={index}
                    event={event}
                    isLast={index === events.length - 1}
                />
            ))}
        </Timeline>
    );
}