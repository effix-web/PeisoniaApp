import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';


import FlagHungary from './assets/flags/flag_hungary.png';
import FlagGermany from './assets/flags/flag_germany.png';
import ImageResizeMode from "react-native-web/dist/exports/Image/ImageResizeMode";

import Flag from './components/flag';

const flags = {
  hungary: './assets/flags/flag_hungary.png',
  germany: './assets/flags/flag_germany.png'
};

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Flag
                    flag={'Hungary'}
                />

                <Flag
                    flag={'Germany'}
                />

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    col: {
        flex: 1,
        flexDirection: 'column'
    },
    row: {
        flexDirection: 'row'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    flag: {
        flex: 1,
        height: 100,
        resizeMode: ImageResizeMode.contain
    }
});
