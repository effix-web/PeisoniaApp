import {store} from "../store/store";
import bannerImgHu from '../assets/img/peisonia_header_fertohomok_1920x1080.png';

export const hu = {
    languageName: 'Magyar',
    homeTitle: 'Látnivalók',
    settings: 'Beállítások',
    sightsTitle: 'Látnivalók',
    sightMapLinkText: 'Térkép',
    languagePickerText: 'Nyelv',
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
                    content: 'Fertőhomok sajátos kultúráját és hagyományait őrzi a Fertőhomoki Tájház. A település kulturális életének egyik kiemelkedő helyszíne, helyt ad hagyományőrző rendezvényeknek, falunapnak, a diófesztivál és a világörökségi nap eseményeinek is. 2003-ban kapta az “Év tájháza” elismerést. Megújult állandó kiállítása a horvát nemzetiségi kultúrát mutatja be, melléképületeiben a térségre jellemző mezőgazdasági foglalkozások eszközeit fedezhetik fel a látogatók.'

                },
                {
                    title: 'Növény- és Állatvilág',
                    audio: require("../assets/audio/Vicetone_TonyIgy-Astronomia.mp3"),
                    content: 'A Fertőhomoki Tájház a “Fertő-táj ékkövei” projektnek köszönhetően 2020. nyarára új, állandó kiállítással, szabadtéri kemencével és nagyobb rendezvénytérrel bővül. Lefedésre kerül a meglévő színpad,  és kialakításra kerül egy új szabadtéri színpad nézőtérrel.'

                },
                {
                    title: 'Tájház',
                    audio: require("../assets/audio/GRiZ_x_Subtronics-Griztronics_ooh_this_sht_be_hittin_different.mp3"),
                    content: 'Lorem ipsum, dolor sit amet'

                },
                {
                    title: 'Tájház II',
                    audio: require("../assets/audio/GRiZ_x_Subtronics-Griztronics_ooh_this_sht_be_hittin_different.mp3"),
                    content: ''

                },
                {
                    title: 'Tájház III',
                    audio: require("../assets/audio/GRiZ_x_Subtronics-Griztronics_ooh_this_sht_be_hittin_different.mp3"),
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
    languageName: 'Deutsch',
    homeTitle: 'Látnivalók DE',
    settings: 'Einstellungen',
    sightsTitle: 'Látnivalók DE',
    sightMapLinkText: 'Térkép DE',
    languagePickerText: 'Nyelv DE',
};

export const en = {
    languageName: 'English',
    homeTitle: 'Látnivalók EN',
    settings: 'Settings',
    sightsTitle: 'Sights',
    sightMapLinkText: 'Map',
    languagePickerText: 'Language',
};

export const sk = {
    languageName: 'Slovenský',
    homeTitle: 'Látnivalók SK',
    settings: 'Beállítások SK',
    sightsTitle: 'Látnivalók SK',
    sightMapLinkText: 'Térkép SK',
    languagePickerText: 'Nyelv SK',
};

export const it = {
    languageName: 'Italiano',
    homeTitle: 'Látnivalók IT',
    settings: 'Beállítások IT',
    sightsTitle: 'Látnivalók IT',
    sightMapLinkText: 'Térkép IT',
    languagePickerText: 'Nyelv IT',
};

export const ro = {
    languageName: 'Română',
    homeTitle: 'Látnivalók RO',
    settings: 'Beállítások RO',
    sightsTitle: 'Látnivalók RO',
    sightMapLinkText: 'Térkép RO',
    languagePickerText: 'Nyelv RO',
};

export function getTranslation(key) {
    const state = store.getState();
    const lang = state.languageReducer.langPref;

    if (lang) {
        switch (lang) {
            case 'hu':
                if (hu.hasOwnProperty(key)) {
                    return hu[key];
                } else {
                    return null;
                }
            case 'de':
                if (de.hasOwnProperty(key)) {
                    return de[key];
                } else {
                    return null;
                }
            case 'en':
                if (en.hasOwnProperty(key)) {
                    return en[key];
                } else {
                    return null;
                }
            case 'sk':
                if (sk.hasOwnProperty(key)) {
                    return sk[key];
                } else {
                    return null;
                }
            case 'it':
                if (it.hasOwnProperty(key)) {
                    return it[key];
                } else {
                    return null;
                }
            case 'ro':
                if (ro.hasOwnProperty(key)) {
                    return ro[key];
                } else {
                    return null;
                }
        }
    }


}