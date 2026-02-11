import moment from "moment-timezone";

moment.updateLocale("es", {
  months: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
});

moment.updateLocale("eu", {
  months: [
    "Urtarrila",
    "Otsaila",
    "Martxoa",
    "Apirila",
    "Maiatza",
    "Ekaina",
    "Uztaila",
    "Abuztua",
    "Iraila",
    "Urria",
    "Azaroa",
    "Abendua",
  ],
});

const resolveLocale = (lng: string): "es" | "eu" =>
  lng.toLowerCase().startsWith("eu") ? "eu" : "es";

export const getActualDate = (i18nLanguage: string) => {
  const locale = resolveLocale(i18nLanguage);

  const base = moment().tz("Europe/Madrid").locale(locale);

  return locale === "es"
    ? base.format("D [de] MMMM, YYYY")
    : base.format("YYYY[ko] MMMM[ren] D[a]");
};
