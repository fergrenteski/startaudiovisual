import React from 'react';
import chroma from 'chroma-js';
import { Grid, useTheme } from '@mui/material';
import ServicoCard from './ServicoCard';
import {
    Videocam as VideocamIcon,
    MusicNote as MusicNoteIcon,
    Tv as TvIcon,
    Slideshow as SlideshowIcon,
    LiveTv as LiveTvIcon,
    Lightbulb as LightbulbIcon,
    Event as EventIcon,
    Computer as ComputerIcon,
    Build as BuildIcon,
} from '@mui/icons-material';
import Secao from './Secao';

const Servicos = () => {
    const theme = useTheme();

    // Define uma cor de ícone mais forte para o modo escuro
    const getIconColor = (defaultColor: string) => {
        return theme.palette.mode === 'dark' ? saturateColor(defaultColor) : defaultColor;
    };

    // Função para saturar a cor
        const saturateColor = (color: string) => {
            return chroma(color).darken(1).saturate(1).hex();
        };


    // Lista de serviços
    const servicos = [
        {
            icon: VideocamIcon,
            title: "Equipamentos Audiovisuais",
            description: "Câmeras, microfones, mesas de som e todos os equipamentos necessários para seu evento.",
            iconColor: "#D1E9FC"
        },
        {
            icon: MusicNoteIcon,
            title: "Sonorização",
            description: "Sistemas de som de alta qualidade para eventos de qualquer tamanho, garantindo áudio perfeito.",
            iconColor: "#b0f3d7"
        },
        {
            icon: TvIcon,
            title: "Painel de LED",
            description: "Painéis de LED de alta resolução para transmissão de conteúdo com qualidade excepcional.",
            iconColor: "#D3F9D8"
        },
        {
            icon: SlideshowIcon,
            title: "Projeção",
            description: "Projetores de última geração para apresentações impactantes e exibições de vídeo.",
            iconColor: "#fed7fb"
        },
        {
            icon: LiveTvIcon,
            title: "Transmissão ao Vivo",
            description: "Soluções completas para streaming de eventos ao vivo, com alta qualidade de imagem e som para plataformas digitais.",
            iconColor: "#fcd1d1"
        },
        {
            icon: LightbulbIcon,
            title: "Iluminação Cênica",
            description: "Iluminação profissional para destacar palcos, ambientes e apresentações, criando atmosferas impactantes e envolventes.",
            iconColor: "#f3e8b5"
        },
        {
            icon: EventIcon,
            title: "Captação e Gravação de Eventos",
            description: "Registro profissional de eventos com câmeras de alta definição e equipe técnica especializada para produção de conteúdo.",
            iconColor: "#e1f9d3"
        },
        {
            icon: ComputerIcon,
            title: "Informática",
            description: "Suporte em tecnologia da informação durante o evento, com montagem de redes, computadores e controle técnico digital.",
            iconColor: "#EAD7FE"
        },
        {
            icon: BuildIcon,
            title: "Estruturas",
            description: "Montagem de estruturas como trusses, palcos, coberturas e suportes, garantindo segurança e eficiência técnica para o evento.",
            iconColor: "#D1E9FC"
        },
    ];

    return (
        <Secao id="servicos" titulo="Nossos Serviços">
            <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 1, sm: 2, md: 3 }}>
                {servicos.map((servico, index) => (
                    <Grid size={1} key={index} sx={{ mt: { xs: 1, sm: 0, md: 0 } }}>
                        <ServicoCard
                            icon={servico.icon}
                            title={servico.title}
                            description={servico.description}
                            iconColor={getIconColor(servico.iconColor)}
                        />
                    </Grid>
                ))}
            </Grid>
        </Secao>
    );
};

export default Servicos;
