import Vue from "vue";
import VueI18n from "vue-i18n";

import { arabic } from "../translate/arabic";
import { english } from "../translate/english";
const messege = {
  en: english,
  ar: arabic,
};

Vue.use(VueI18n);
const messages = messege;
export const i18n = new VueI18n({
  locale: "en",
  messages,
});
