import {store} from "../store/store";
import bannerImgHu from '../assets/img/peisonia_header_fertohomok_1920x1080.png';

export const hu = {
    languageName: 'Magyar',
    homeTitle: 'Látnivalók',
    settings: 'Beállítások',
    sightsTitle: 'Látnivalók',
    sightMapLinkText: 'Térkép',
    languagePickerText: 'Nyelv',
    alertTitle: 'Értesítés',
    alertText: 'Kimásolva a vágólaplra!',
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
                    audio: require("../assets/audio/rick_astley_never_gonna_give_you_up.mp3"),
                    content: 'Fertőhomok sajátos kultúráját és hagyományait őrzi a Fertőhomoki Tájház. A település kulturális életének egyik kiemelkedő helyszíne, helyt ad hagyományőrző rendezvényeknek, falunapnak, a diófesztivál és a világörökségi nap eseményeinek is. 2003-ban kapta az “Év tájháza” elismerést. Megújult állandó kiállítása a horvát nemzetiségi kultúrát mutatja be, melléképületeiben a térségre jellemző mezőgazdasági foglalkozások eszközeit fedezhetik fel a látogatók.'

                },
                {
                    title: 'Növény- és Állatvilág',
                    audio: require("../assets/audio/IlleniumxSaidTheSky-WheredUGo.mp3"),
                    content: 'A Fertőhomoki Tájház a “Fertő-táj ékkövei” projektnek köszönhetően 2020. nyarára új, állandó kiállítással, szabadtéri kemencével és nagyobb rendezvénytérrel bővül. Lefedésre kerül a meglévő színpad,  és kialakításra kerül egy új szabadtéri színpad nézőtérrel.'

                },
                {
                    title: 'Tájház',
                    audio: require("../assets/audio/GRiZ_x_Subtronics-Griztronics_ooh_this_sht_be_hittin_different.mp3"),
                    content: 'Lorem ipsum, dolor sit amet'

                },
            ]

        },
        {
            title: 'Gloriett kilátó',
            location: 'Fertőboz',
            bannerImg: require('../assets/img/peisonia_header_gloriett_03_1920x1080.png'),
            address: '9493 Fertőboz',
            mapLink: 'https://www.google.com/maps/place/Fert%C5%91bozi+gloriett+kil%C3%A1t%C3%B3/@47.6360085,16.6938836,17z/data=!4m5!3m4!1s0x476c19fcf7031f4f:0xf6b5109929837988!8m2!3d47.6360085!4d16.6960723',
            coordinates: '47.636131, 16.696083',

        },
        {
            title: 'Mariska Néni Háza',
            location: 'Hegykő',
            bannerImg: require('../assets/img/peisonia_header_mariskaneni02_1920x1080.png'),
            address: '9437 Hegykő, Nyárfa sor 5.',
            mapLink: 'https://www.google.com/maps/place/Hegyk%C5%91,+Ny%C3%A1rfa+sor+5,+9437/@47.6207663,16.7853207,17z/data=!3m1!4b1!4m5!3m4!1s0x476c1a17fa2b160f:0x2aa3669a26acc663!8m2!3d47.6207663!4d16.7875094',
            coordinates: '47.620990, 16.787434'

        },
        {
            title: 'Papkert',
            location: 'Hidegség',
            bannerImg: require('../assets/img/peisonia_header_papkert-02_1920x1080-1.png'),
            address: 'Hidegség, Fő utca 19.',
            mapLink: 'https://www.google.com/maps/place/Hidegs%C3%A9g,+F%C5%91+u.+19,+9491/@47.6269135,16.7385762,17z/data=!3m1!4b1!4m5!3m4!1s0x476c19b8b3813ce9:0x52153833a86322e7!8m2!3d47.6269135!4d16.7407649',
            coordinates: '47.627058, 16.740776'
        },
        {
            title: 'Sarródi Tájház',
            location: 'Sarród',
            bannerImg: require('../assets/img/peisonia_header_sarrod_1920x1080.png'),
            address: '9435 Sarród, Szeder u. 8.',
            mapLink: 'https://www.google.com/maps/place/Sarr%C3%B3d,+Szeder+u.+8,+9435/@47.6355409,16.8632377,17z/data=!3m1!4b1!4m5!3m4!1s0x476c107316d1b59b:0x326a81e67c3d5d0c!8m2!3d47.6355409!4d16.8654264',
            coordinates: '47.635700, 16.865448'

        },
        {
            title: 'Széchényi - kastély ',
            location: 'Fertőszéplak',
            bannerImg: require('../assets/img/peisonia_szechenyi-kastely_header_1920x1080.jpg'),
            address: 'Széchényi kastély, 9436 Fertőszéplak, Ady Endre utca 1.',
            mapLink: 'https://www.google.com/maps/place/Sz%C3%A9chenyi-kast%C3%A9ly/@47.6167007,16.83487,19z/data=!4m5!3m4!1s0x476c1a8c72fe7e11:0x6e7f186bf1e222c5!8m2!3d47.6167007!4d16.8354172',
            coordinates: '47.616744, 16.835431'
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
    alertTitle: 'Értesítés DE',
    alertText: 'Kimásolva a vágólaplra! DE',
};

export const en = {
    languageName: 'English',
    homeTitle: 'Látnivalók EN',
    settings: 'Settings',
    sightsTitle: 'Sights',
    sightMapLinkText: 'Map',
    languagePickerText: 'Language',
    alertTitle: 'Notification',
    alertText: 'Copied to clipboard!',
};

export const sk = {
    languageName: 'Slovenský',
    homeTitle: 'Látnivalók SK',
    settings: 'Beállítások SK',
    sightsTitle: 'Látnivalók SK',
    sightMapLinkText: 'Térkép SK',
    languagePickerText: 'Nyelv SK',
    alertTitle: 'Értesítés SK',
    alertText: 'Kimásolva a vágólaplra! SK',
};

export const it = {
    languageName: 'Italiano',
    homeTitle: 'Látnivalók IT',
    settings: 'Beállítások IT',
    sightsTitle: 'Látnivalók IT',
    sightMapLinkText: 'Térkép IT',
    languagePickerText: 'Nyelv IT',
    alertTitle: 'Értesítés IT',
    alertText: 'Kimásolva a vágólaplra! IT',
};

export const ro = {
    languageName: 'Română',
    homeTitle: 'Látnivalók RO',
    settings: 'Beállítások RO',
    sightsTitle: 'Látnivalók RO',
    sightMapLinkText: 'Térkép RO',
    languagePickerText: 'Nyelv RO',
    alertTitle: 'Értesítés RO',
    alertText: 'Kimásolva a vágólaplra! RO',
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