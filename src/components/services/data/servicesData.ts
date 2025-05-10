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
import { useTranslation } from 'react-i18next';

export function useServices() {
    const { t } = useTranslation();

    return [
        {
            icon: VideocamIcon,
            title: t("services.items.audio.title"),
            description: t("services.items.audio.description"),
            iconColor: "#D1E9FC"
        },
        {
            icon: MusicNoteIcon,
            title: t("services.items.sound.title"),
            description: t("services.items.sound.description"),
            iconColor: "#b0f3d7"
        },
        {
            icon: TvIcon,
            title: t("services.items.led.title"),
            description: t("services.items.led.description"),
            iconColor: "#D3F9D8"
        },
        {
            icon: SlideshowIcon,
            title: t("services.items.projection.title"),
            description: t("services.items.projection.description"),
            iconColor: "#fed7fb"
        },
        {
            icon: LiveTvIcon,
            title: t("services.items.live.title"),
            description: t("services.items.live.description"),
            iconColor: "#fcd1d1"
        },
        {
            icon: LightbulbIcon,
            title: t("services.items.lighting.title"),
            description: t("services.items.lighting.description"),
            iconColor: "#f3e8b5"
        },
        {
            icon: EventIcon,
            title: t("services.items.recording.title"),
            description: t("services.items.recording.description"),
            iconColor: "#e1f9d3"
        },
        {
            icon: ComputerIcon,
            title: t("services.items.it.title"),
            description: t("services.items.it.description"),
            iconColor: "#EAD7FE"
        },
        {
            icon: BuildIcon,
            title: t("services.items.structures.title"),
            description: t("services.items.structures.description"),
            iconColor: "#D1E9FC"
        },
    ];
}
