import {Dimensions, StyleSheet, Platform} from 'react-native';
import ImageResizeMode from "react-native-web/dist/exports/Image/ImageResizeMode";

let {height, width} = Dimensions.get('window');

export let styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        height: '100%',
        alignContent: 'center',
        backgroundColor: "#fff"
    },
    col: {
        flex: 1,
        flexDirection: 'column'
    },
    row: {
        flexDirection: 'row'
    },
    appTitle: {
        fontFamily: 'System',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 40,
        color: '#333333',
        marginTop: (height * 0.10),
        marginBottom: 30
    },
    container: {
        backgroundColor: '#fff',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewTitle: {
        fontSize: 48,
        fontWeight: 'bold',
        padding: 20,
        color: "#333",
        paddingBottom: Platform.OS === 'android' ? 15 : 20,
        paddingTop: Platform.OS === 'android' ? 30 : 20
    },
    settingsButton: {
        height: 10,
        marginRight: Platform.OS === 'android' ? '20' : null
    },
    sectionTitle: {
        backgroundColor: "#fff"
    },
    modalStyle: {
        backgroundColor: 'transparent',
        height: 100,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
        justifyContent: 'flex-end'
    },
    modalContent: {
        height: 'auto',
        backgroundColor: '#fff'
    },
    languageSelectButton: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        paddingTop: 12,
        paddingBottom: 12,
        borderTopColor: '#e0dfe4',
        borderTopWidth: 1,
        borderBottomColor: '#e0dfe4',
        borderBottomWidth: 1
    },
    languageSelectButtonText: {
        paddingLeft: 12,
        fontSize: 17,
        color: '#333'
    },
    languageSelectButtonArrow: {
        marginRight: 12,
        alignSelf: 'center',
        marginTop: 2,
        marginLeft: 5
    },
    languageSelectButtonCurrentLanguage: {
        marginLeft: 'auto',
        fontSize: 17,
        color: '#8c8c8e'
    }

});

export const flagStyles = StyleSheet.create({
    flagWrapper: {
        height: height * 0.15,
        width: '50%',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginBottom: 15
    },
    flagButton: {
        height: '100%',
        width: '100%',
        flex: 2,
        flexDirection: 'column',
    },
    flagImage: {
        flex: 1,
        height: "100%",
        width: "100%",
        resizeMode: ImageResizeMode.contain,
        alignContent: 'center',
        justifyContent: 'center'
    },
    flagText: {
        justifyContent: 'center',
        textAlign: 'center',
        fontFamily: 'System',
        fontWeight: '200',
        paddingTop: 5
    }
});

export const homeStyles = StyleSheet.create({
    homeWrapper: {
        backgroundColor: "#fefefe",
        height: '100%'
    }
});

export const sightListItemStyles = StyleSheet.create({
    sightListWrapper: {
        marginLeft: 20,
        marginRight: 20,
        paddingTop: 15,
        paddingBottom: 15,
        borderBottomWidth: 0.5,

    },
    sightListTitle: {
        fontSize: 28,
        color: "#333",
        fontWeight: '500'
    },
    sightLocation: {
        fontSize: 18,
        fontWeight: '200',
        fontFamily: Platform.OS === 'android' ? 'sans-serif-light' : 'System',
        letterSpacing: 0.5,
        color: "#333"
    }
});

export const sightStyles = StyleSheet.create({
    sightWrapper: {
        height: '100%',
        backgroundColor: '#fff'
    },
    sightBanner: {
        position: 'relative',
        width: '100%',
        height: height * 0.4,
        justifyContent: 'flex-end',
    },
    sightBannerImage: {
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        paddingBottom: 10
    },
    sightBannerTextWrapper: {
        position: 'absolute',
        bottom: 10
    },
    sightTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        padding: 10,
        paddingBottom: 0,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 5
    },
    sightSubTitle: {
        fontSize: 16,
        color: '#fff',
        paddingLeft: 10,
        paddingRight: 10,
        fontWeight: '400',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 5
    },
    sightLink: {
        textDecorationLine: 'underline'
    }
});

export const audioPlayerStyles = StyleSheet.create({
    playerWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        marginTop: 10
    },
    playerControls: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    playButton: {
        marginLeft: 10,
        marginRight: 10,
        width: 48,
        textAlign: 'center'
    },
    playerSlider: {
        width: (Platform.OS === 'ios') ? (width - 40) : (width - 20),
    },
    playerTimeWrapper:{
        width: '100%'
    },
    playerCurrentTime: {
        marginLeft: (Platform.OS === 'ios') ? 12 : 15,
    },
    playerDurationTime: {
        marginLeft: 'auto',
        marginRight: (Platform.OS === 'ios') ? 12 : 15,
    }
});


export const attractionStyles = StyleSheet.create({
    attractionWrapper: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#333',
        //maxHeight: 45,
        height: 'auto',
        overflow: 'hidden',
        //height: '100%'
    },
    attractionContentWrapper: {
        height: 0,
        overflow: 'hidden'
    },
    attractionOpen: {
        height: 300,
    },
    attractionTitle: {
        fontSize: 28,
        color: "#333",
        fontWeight: '500',
        paddingBottom: 5
    },
    attractionTextWrapper: {
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10
    },
    attractionText: {
        lineHeight: 21,
        fontSize: 18,
        fontWeight: "300",
        fontFamily: Platform.OS === 'android' ? 'sans-serif-light' : 'System',
    },
    arrow: {
        marginLeft: 'auto',
        alignSelf: 'center'
    }

});