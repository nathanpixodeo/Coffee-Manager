import {createIntl, createIntlCache} from 'react-intl'
import {defaultLocale} from 'constants/defaultValues'
import enMessages from '../locales/en_US';


const EnLang = {
    messages: {
        ...enMessages
    },
    locale: 'en-US',
    defaultLocale: defaultLocale,
};
export default EnLang;