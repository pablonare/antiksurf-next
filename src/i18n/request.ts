import {getRequestConfig} from "next-intl/server";
import {routing} from "./routing";

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as "en" | "es" | "fr" | "ar")) {
    locale = routing.defaultLocale;
  }
  const navigationMessages = (await import(`./messages/navigation/${locale}.json`)).default;
  const homeMessages = (await import(`./messages/home/${locale}.json`)).default;
  const surftripsMessages = (await import(`./messages/surftrips/${locale}.json`)).default;
  const eventsMessages = (await import(`./messages/events/${locale}.json`)).default;

  return {
    locale,
    messages: {
      navigation: navigationMessages,
      home: homeMessages,
      surftrips: surftripsMessages,
      events: eventsMessages
    }
  };
});
