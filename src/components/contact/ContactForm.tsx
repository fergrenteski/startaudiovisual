import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import {
    TextField, Button, Typography, Box, Select, MenuItem, FormControl, InputLabel,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { useTranslation } from "react-i18next";
import emailjs from 'emailjs-com';

function ContactForm() {
    const { t } = useTranslation();
    const [captchaValue, setCaptchaValue] = useState<string | null>(null);

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (!captchaValue) {
            alert(t('contact.form.captchaRequired'));
            return;
        }

        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID!,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
            e.target,
            process.env.REACT_APP_EMAILJS_USER_ID!
        ).then(
            () => {
                alert(t('contact.form.success'));
                setCaptchaValue(null); // reset captcha após envio
            },
            (error) => {
                console.error(error);
                alert(t('contact.form.error'));
            }
        );
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
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
                <TextField name="name" fullWidth label={t('contact.form.name')} variant="outlined" margin="normal" required />
                <Box sx={{ display: 'flex', gap: 2, '& > *': { flexGrow: 1 } }}>
                    <TextField name="phone" label={t('contact.form.phone')} variant="outlined" margin="normal" required />
                    <TextField name="email" label={t('contact.form.email')} variant="outlined" margin="normal" required />
                </Box>
                <FormControl fullWidth margin="normal">
                    <InputLabel id="contact-reason-label">{t('contact.form.contact')}</InputLabel>
                    <Select
                        name="reason"
                        labelId="contact-reason-label"
                        id="contact-reason"
                        defaultValue=""
                        label={t('contact.form.contact')}
                        required
                        sx={{
                            textAlign: 'left',
                            '& .MuiSelect-select': {
                                textAlign: 'left',
                                paddingLeft: '1em', // para dar um espaçamento da borda
                            },
                        }}
                    >
                        <MenuItem value="support">Orçamento</MenuItem>
                        <MenuItem value="sales">Vendas</MenuItem>
                        <MenuItem value="general">Geral</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    name="message"
                    fullWidth
                    label={t('contact.form.message')}
                    variant="outlined"
                    margin="normal"
                    multiline
                    rows={4}
                    required
                />

                {/* reCAPTCHA */}
                <Box sx={{ mt: 2, mb: 1 }}>
                    <ReCAPTCHA
                        sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY!}
                        onChange={(value) => setCaptchaValue(value)}
                    />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'flex-start', pt: 2 }}>
                    <Button type="submit" variant="contained" color="primary">
                        {t('contact.form.button')}
                    </Button>
                </Box>
            </Box>

            {/* Bloco lateral com informações */}
            <Box
                sx={{
                    minWidth: 250,
                    textAlign: { sm: 'center', lg: 'left' },
                    display: { sm: 'flex', md: 'block' },
                    justifyContent: { sm: 'space-around', md: 'flex-start' },
                    py: 5,
                }}
            >
                <Box sx={{ textAlign: { sm: 'center', md: 'left' }, mb: 2 }}>
                    <LocationOnIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="h6" gutterBottom>
                        {t('contact.info.locale.title')}
                    </Typography>
                    <Typography variant="body2">
                        {t('contact.info.locale.address')}<br />
                        {t('contact.info.locale.city')}
                    </Typography>
                </Box>
                <Box sx={{ textAlign: { sm: 'center', md: 'left' }, mb: 2 }}>
                    <EmailIcon sx={{ color: 'primary.main' }} />
                    <Typography variant="h6" gutterBottom>
                        {t('contact.info.email.title')}
                    </Typography>
                    <Typography variant="body2">{t('contact.info.email.subtitle')}</Typography>
                </Box>
                <Box sx={{ textAlign: { sm: 'center', md: 'left' }, mb: 2 }}>
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
