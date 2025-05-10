import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Header from "../components/common/Header";
import HomeBanner from "../components/events/HomeBanner";
import AnimatedClientsBanner from "../components/clients/AnimatedClientsBanner";
import Services from "../components/services/Services";
import ListaEventos from "../components/events/ListaEventos";
import Section from "../components/common/Section";
import VerticalTimeline from "../components/timeline/VerticalTimeline";
import ContactForm from "../components/contact/ContactForm";
import Footer from "../components/common/Footer";
import {useTranslation} from "react-i18next";

export default function App() {
    const { t, i18n } = useTranslation(); // Usando o hook para acessar as traduções
    const [mode, setMode] = React.useState<'light' | 'dark'>('light'); // Definindo o tipo explícito

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: mode,
                },
            }),
        [mode],
    );

    const toggleTheme = () => {
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    const toggleLanguage = () => {
        const newLanguage = i18n.language === 'pt' ? 'en' : 'pt';
        i18n.changeLanguage(newLanguage);
    };


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header toggleTheme={toggleTheme} toggleLanguage={toggleLanguage}/>
            <HomeBanner />
            <Section titulo={t('companies.title')} subtitulo={t('companies.subtitle')}>
                <AnimatedClientsBanner />
            </Section>
            <Section id={"servicos"} titulo={t('services.title')} subtitulo={t('services.subtitle')}>
                <Services />
            </Section>
                <Section id={"portfolio"} titulo={t('portfolio.title')} subtitulo={t('portfolio.subtitle')}>
            <ListaEventos/>
            </Section>
            <Section id={"sobre"} titulo={t('about.title')} subtitulo={t('about.subtitle')}>
                < VerticalTimeline />
            </Section>
            <Section id={"contato"} titulo={t('contact.title')} subtitulo={t('contact.subtitle')}>
            < ContactForm />
            </Section>
            <Footer />
        </ThemeProvider>
    );
}
