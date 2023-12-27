import {createIntl, createIntlCache} from 'react-intl'
import {defaultLocale} from 'constants/defaultValues'
import esMessages from '../locales/es_ES';

const EsLang = {
    messages: {
        ...esMessages
    },
    locale: 'es-ES',
    defaultLocale: defaultLocale,
};
export default EsLang;