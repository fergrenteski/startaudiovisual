import React from 'react';
import {
    TextField,
    Button,
    Typography,
    Box,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import {useTranslation} from "react-i18next";

function ContactForm() {
    const { t } = useTranslation(); // Usando o hook para acessar as traduções
    return (
        <Box
            sx={{
                maxWidth: '100%',
                mx: 'auto',
                py: 4,
                px: 2,
                display: 'flex',
                gap: 4,
                alignItems: { sx: 'center', md: 'flex-start' },
                justifyContent: 'center',
                flexDirection: { xs: 'column', md: 'row' },
            }}
        >
            <Box sx={{ flexGrow: 1, width: '100%' }}>
                <TextField fullWidth label={t('contact.form.name')} variant="outlined" margin="normal" />
                <Box sx={{ display: 'flex', gap: 2, '& > *': { flexGrow: 1 } }}>
                    <TextField label={t('contact.form.phone')} variant="outlined" margin="normal" />
                    <TextField label={t('contact.form.email')} variant="outlined" margin="normal" />
                </Box>
                <FormControl fullWidth margin="normal">
                    <InputLabel id="contact-reason-label">{t('contact.form.contact')}</InputLabel>
                    <Select
                        labelId="contact-reason-label"
                        id="contact-reason"
                        value="" // You'll likely want to manage this state
                        label={t('contact.form.contact')}
                    >
                        <MenuItem value="">Selecione</MenuItem>
                        <MenuItem value="support">Suporte</MenuItem>
                        <MenuItem value="sales">Vendas</MenuItem>
                        <MenuItem value="general">Geral</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    fullWidth
                    label={t('contact.form.message')}
                    variant="outlined"
                    margin="normal"
                    multiline
                    rows={4}
                />
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', pt: 2 }}>
                    <Button variant="contained" color="primary" >
                        {t('contact.form.button')}
                    </Button>
                </Box>
            </Box>

            <Box
                sx={{
                    minWidth: 250,
                    textAlign: { sm: 'center', lg: 'left' },
                    display: { sm: 'flex', md: 'block' },
                    justifyContent: { sm: 'space-around', md: 'flex-start'},
                    py: 5,
                }}
            >
            <Box sx={{ display: 'block', textAlign: {sm: 'center', md: 'left'}, mb: 2 }}>
                    <LocationOnIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="h6" gutterBottom>
                        {t('contact.info.locale.title')}
                    </Typography>
                    <Typography variant="body2">
                        {t('contact.info.locale.address')}
                        <br />
                        {t('contact.info.locale.city')}
                    </Typography>
                </Box>
                <Box sx={{ display: 'block', textAlign: {sm: 'center', md: 'left'}, mb: 2 }}>
                    <EmailIcon sx={{ color: 'primary.main' }} />
                    <Typography variant="h6" gutterBottom >
                        {t('contact.info.email.title')}
                    </Typography>
                    <Typography variant="body2">{t('contact.info.email.subtitle')}</Typography>
                </Box>
                <Box sx={{ display: 'block', textAlign: {sm: 'center', md: 'left'}, mb: 2 }}>
                    <PhoneIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="h6" gutterBottom>
                        {t('contact.info.phone.title')}
                    </Typography>
                    <Typography variant="body2">{t('contact.info.phone.subtitle')}</Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default ContactForm;