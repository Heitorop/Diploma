import { createI18n } from "vue-i18n";
import messages from "@/i18n/index";

let i18n = createI18n({
  locale: "ua-UA",
  allowComposition: true,
  globalInjection: true,
  messages,
});

export { i18n };
