// import { getRequestConfig } from "next-intl/server";

// // Can be imported from a shared config
// export const locales = ["en", "th"];
// export const defaultLocale = "en";

// export default getRequestConfig(async ({ locale }) => {
//   return {
//     locale: locale || "en",
//     messages: (await import(`../message/${locale || "en"}/animezone.json`)).default,
//   };
// });