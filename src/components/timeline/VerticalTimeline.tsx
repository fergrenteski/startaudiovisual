import * as React from 'react';
import {
    Timeline
} from '@mui/lab';
import {useMediaQuery, useTheme} from '@mui/material';
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
import {useTranslation} from "react-i18next";

export default function VerticalTimeline() {
    const {t} = useTranslation();

    const events = [
        {year: '2001', title: t('about.items.2001.title'), description: t('about.items.2001.description'), icon: <BusinessIcon/>},
        {year: '2005', title: t('about.items.2005.title'), description: t('about.items.2005.description'), icon: <LocationCityIcon/>},
        {year: '2012', title: t('about.items.2012.title'), description: t('about.items.2012.description'), icon: <EventIcon/>},
        {year: '2016', title: t('about.items.2016.title'), description: t('about.items.2016.description'), icon: <LocalHospitalIcon/>},
        {year: '2020', title: t('about.items.2020.title'), description: t('about.items.2020.description'), icon: <CoronavirusIcon/>},
        {year: '2021', title: t('about.items.2021.title'), description: t('about.items.2021.description'), icon: <ComputerIcon/>},
        {year: '2023', title: t('about.items.2023.title'), description: t('about.items.2023.description'), icon: <BuildIcon/>},
    ];

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