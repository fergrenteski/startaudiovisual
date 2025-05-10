import { useTranslation } from "react-i18next";

export function useEventosData() {
  const { t } = useTranslation();

  return t("portfolio.events", { returnObjects: true }) as {
    title: string;
    subtitle: string;
    description: string;
    date: string;
    location: string;
    image: string;
  }[];
}
