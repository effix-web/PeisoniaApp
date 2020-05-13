import {store} from "../store/store";
import bannerImgHu from '../assets/img/peisonia_header_fertohomok_1920x1080.png';

export const hu = {
    homeTitle: 'Látnivalók',
    settings: 'Beállítások',
    sightsTitle: 'Látnivalók',
    sightMapLinkText: 'Térkép',
    sights: [
        {
            title: 'Fertőhomoki Tájház',
            location: 'Fertőhomok',
            bannerImg: require('../assets/img/peisonia_header_fertohomok_1920x1080.png'),
            address: '9492 Fertőhomok, Akác u. 10.',
            mapLink: 'https://www.google.com/maps/place/Fert%C5%91homok,+Ak%C3%A1c+u.+10,+9492/@47.6212173,16.7701598,17z/data=!3m1!4b1!4m5!3m4!1s0x476c198a9810052f:0x8319046fd0ac6ec!8m2!3d47.6212173!4d16.7723485',
            coordinates: '47.621391, 16.772338',
            attractions: [
                {
                    title: 'Panoráma',
                    audio: require("../assets/audio/IlleniumxSaidTheSky-WheredUGo.mp3"),
                    content: ''

                }
            ]

        },
        {
            title: 'Gloriett kilátó',
            location: 'Fertőboz',

        },
        {
            title: 'Mariska Néni Háza',
            location: 'Hegykő',

        },
        {
            title: 'Papkert',
            location: 'Hidegség',

        },
        {
            title: 'Sarródi Tájház',
            location: 'Sarród',

        },
        {
            title: 'Széchényi - kastély ',
            location: 'Fertőszéplak',

        },

    ]
};

export const de = {
    homeTitle: 'Látnivalók DE',
    settings: 'Einstellungen',
    sightsTitle: 'Látnivalók DE',
    sightMapLinkText: 'Térkép DE',
};

export const en = {
    homeTitle: 'Látnivalók EN',
    settings: 'Settings',
    sightsTitle: 'Sights',
    sightMapLinkText: 'Map',
};

export const sk = {
    homeTitle: 'Látnivalók SK',
    settings: 'Beállítások SK',
    sightsTitle: 'Látnivalók SK',
    sightMapLinkText: 'Térkép SK',
};

export const it = {
    homeTitle: 'Látnivalók IT',
    settings: 'Beállítások IT',
    sightsTitle: 'Látnivalók IT',
    sightMapLinkText: 'Térkép IT',
};

export const ro = {
    homeTitle: 'Látnivalók RO',
    settings: 'Beállítások RO',
    sightsTitle: 'Látnivalók RO',
    sightMapLinkText: 'Térkép RO',
};

export function getTranslation(key) {
    const state = store.getState();
    const lang = state.languageReducer.langPref;

    if(lang) {
        switch (lang) {
            case 'hu':
                if(hu.hasOwnProperty(key)){
                    return hu[key];
                } else {
                    return 'No translation'
                }
            case 'de':
                if(de.hasOwnProperty(key)){
                    return de[key];
                } else {
                    return 'No translation'
                }
            case 'en':
                if(en.hasOwnProperty(key)){
                    return en[key];
                } else {
                    return 'No translation'
                }
            case 'sk':
                if(sk.hasOwnProperty(key)){
                    return sk[key];
                } else {
                    return 'No translation'
                }
            case 'it':
                if(it.hasOwnProperty(key)){
                    return it[key];
                } else {
                    return 'No translation'
                }
            case 'ro':
                if(ro.hasOwnProperty(key)){
                    return ro[key];
                } else {
                    return 'No translation'
                }
        }
    }


}