import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Header from "../components/Header";
import HomeBanner from "../components/HomeBanner";
import BannerAnimadoMarcas from "../components/BannerAnimadoMarcas";
import Servicos from "../components/Servicos";
import ListaEventos from "../components/ListaEventos";
import Secao from "../components/Secao";
import VerticalTimeline from "../components/VerticalTimeline";

export default function App() {
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

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header toggleTheme={toggleTheme} />
            <HomeBanner />
            <Secao titulo={"Empresas que confiaram em nós!"} subtitulo={"Estas são algumas das empresas que confiaram em nossos serviços e que tiveram o privilégio de contar com nossa expertise e compromisso em entregar soluções de alta qualidade. Estamos orgulhosos de estabelecer parcerias sólidas com organizações que reconhecem nosso trabalho e profissionalismo em cada projeto."}>
                <BannerAnimadoMarcas />
            </Secao>
            <Secao id={"servicos"} titulo={"Serviços"} subtitulo={"Oferecemos uma gama completa de soluções para garantir a realização de eventos de sucesso. Com foco na excelência e na personalização, nossos serviços incluem a locação de equipamentos de alta qualidade, gerenciamento completo de logística e suporte técnico especializado. Estamos prontos para transformar qualquer evento, do pequeno ao grande porte, com tecnologia de ponta e toda a infraestrutura necessária para proporcionar uma experiência inesquecível."}>
                <Servicos />
            </Secao>
                <Secao id={"portifolio"} titulo={"Portifólio"} subtitulo={"Ao longo dos anos, realizamos eventos inesquecíveis nos quatro cantos do país — de grandes metrópoles a cidades do interior. Cada projeto é planejado com atenção aos mínimos detalhes, garantindo experiências únicas, envolventes e personalizadas. Nesta seção, você confere alguns dos nossos principais eventos realizados em todo o território nacional, refletindo nosso compromisso com excelência, criatividade e resultados impactantes."}>
            <ListaEventos/>
            </Secao>
            <Secao id={"sobre"} titulo={"Quem Somos?"} subtitulo={"A Start Audio Visual foi fundada em 2001, inicialmente como uma empresa familiar com o objetivo de oferecer soluções audiovisuais de alta qualidade. Com o tempo, a empresa passou por um processo de evolução, se estruturando de maneira sólida para atender a um mercado cada vez mais exigente. Ao longo dos anos, a Start Audio Visual se destacou pela inovação, qualidade e compromisso com a excelência, expandindo seus serviços e conquistando uma base fiel de clientes. Hoje, a empresa é reconhecida no setor por sua capacidade de entregar projetos completos, desde a locação de equipamentos até a realização de produções audiovisuais de alto nível. Com uma equipe especializada e uma infraestrutura moderna, a Start Audio Visual continua a se reinventar, mantendo sua essência familiar e seu compromisso com a qualidade e a confiança."} >
                < VerticalTimeline />
            </Secao>
        </ThemeProvider>
    );
}
