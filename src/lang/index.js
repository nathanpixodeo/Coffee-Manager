import {createIntl, createIntlCache} from 'react-intl'
import enLang from './entries/en-US';
import esLang from './entries/es-ES';

const AppLocale = {
    en: enLang,
    es: esLang
};
createIntl(AppLocale.en);
createIntl(AppLocale.es);

export default AppLocale;
