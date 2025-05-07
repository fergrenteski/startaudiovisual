import React, { useState, MouseEvent } from 'react';
import {
    Box,
    Typography,
    Button,
    Modal,
    Card,
    CardMedia,
    IconButton,
    Chip,
    Stack,
} from '@mui/material';
import { styled } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import EventIcon from '@mui/icons-material/Event';
import PlaceIcon from '@mui/icons-material/Place';
import { motion } from 'framer-motion';

type EventoCardProps = {
    title: string;
    subtitle: string;       // Categoria
    image: string;
    description: string;    // Descrição do evento
    date: string;           // Ex: "20 de Julho de 2025"
    location: string;       // Ex: "Expo Center Norte, São Paulo"
};

const HoverOverlay = styled(Box)({
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: '#fff',
    opacity: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'opacity 0.3s',
    borderRadius: 16,
});

const EventCardContainer = styled(Card)({
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    objectFit: 'cover',
    borderRadius: 16,
    cursor: 'pointer',
    '&:hover .hoverContent': {
        opacity: 1,
    },
});

const modalStyle = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {xs: '95%', sm: '65%', md: '50%', lg: '40%'},
    maxHeight: '90vh',
    bgcolor: 'background.paper',
    borderRadius: 3,
    boxShadow: 24,
    overflowY: 'auto',
};

const EventoCard: React.FC<EventoCardProps> = ({ title, subtitle, image, description, date, location }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setOpen(true);
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <EventCardContainer elevation={6}>
                    <CardMedia
                        component="img"
                        image={image}
                        alt={title}
                    />
                    <HoverOverlay className="hoverContent">
                        <Typography variant="h6" fontWeight="bold">
                            {title}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {subtitle}
                        </Typography>
                        <Button variant="contained" color="primary" onClick={handleOpen}>
                            Ver Detalhes
                        </Button>
                    </HoverOverlay>
                </EventCardContainer>
            </motion.div>

            <Modal open={open} onClose={() => setOpen(false)}>
                <Box sx={modalStyle}>
                    <Box position="relative">
                        <CardMedia
                            component="img"
                            image={image}
                            alt={title}
                            sx={{
                                width: '100%',
                                height: 250,
                                objectFit: 'cover',
                                borderTopLeftRadius: 12,
                                borderTopRightRadius: 12,
                            }}
                        />
                        <IconButton
                            onClick={() => setOpen(false)}
                            sx={{
                                position: 'absolute',
                                top: 10,
                                right: 10,
                                backgroundColor:
                                    'rgba(255, 255, 255, 0.5)',
                                color:'#000',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)'
                                },
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Box px={3} py={2}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            {title}
                        </Typography>
                        <Chip
                            label={subtitle}
                            size="small"
                            sx={{ mb: 2, backgroundColor: '#e8f0fe', color: '#3367d6', fontWeight: 'bold' }}
                        />
                        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
                            {description}
                        </Typography>

                        <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                            <EventIcon color="action" />
                            <Typography variant="body2">{date}</Typography>
                        </Stack>

                        <Stack direction="row" alignItems="center" spacing={1}>
                            <PlaceIcon color="action" />
                            <Typography variant="body2">{location}</Typography>
                        </Stack>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default EventoCard;
