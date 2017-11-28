import { addLocaleData } from "react-intl";
import { updateIntl }    from "react-intl-redux";
// import axios            from 'axios';

const possibleLocale = navigator.language.split('-')[0] || "en";

// eslint-disable-next-line import/no-dynamic-require
addLocaleData(require(`react-intl/locale-data/${possibleLocale}`));

// eslint-disable-next-line one-var
export const intl = {
    locale: navigator.language,
    messages: {}
};

// export const localization = (location = possibleLocale) => {
//     // eslint-disable-next-line arrow-body-style
//     return ((dispatch) => {
//         return import(`file-loader!../../locales/${location}.json`).then(json => axios.get(json)).then((response) => {
//             dispatch(updateIntl(Object.assign({}, intl, {
//                 messages: response.data
//             })));
//         }).catch((error) => {
//             // eslint-disable-next-line no-console
//             console.log(`Error loading location: ${error}`);
//         });
//     });
// };
