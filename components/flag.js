import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Button, TouchableWithoutFeedback, AsyncStorage} from 'react-native';
import ImageResizeMode from "react-native-web/dist/exports/Image/ImageResizeMode";

import FlagHungary from '../assets/flags/flag_hungary.png';
import FlagGermany from '../assets/flags/flag_germany.png';


class Flag extends Component {
    constructor(props) {
        super(props);
    }

    _storeData = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (e) {
            console.error('Failed to save LanguagePref');
        }
    };

    _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('LanguagePref');
            if (value !== null) {
                return value;
            }
        } catch (error) {
            // Error retrieving data
        }
    };

    GetFlag = (flagString) => {
        switch (flagString.toLowerCase()) {
            case 'hungary':
                return FlagHungary;

            case 'germany':
                return FlagGermany;

        }
    };

    OnFlagPress = (flagString) => {
        //console.warn(flagString);
        console.warn("pressed: " + this._storeData('LanguagePref', flagString.toLowerCase()));
    };

    componentDidMount() {
        console.warn(this._retrieveData());
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={() => {
                this.OnFlagPress(this.props.flag)
            }}>
                <View style={styles.flagWrapper}>
                    <Image
                        style={styles.flagImage}
                        source={this.GetFlag(this.props.flag)}
                    />
                    <Text style={styles.flagText}>
                        {this.props.flag}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    flagWrapper: {
        flex: 1,
        height: 100,
        width: '50%',
        flexDirection: 'column',
        backgroundColor: '#eee'
    },
    flagImage: {
        flex: 1,
        height: undefined,
        width: undefined,
        resizeMode: ImageResizeMode.contain,
        alignContent: 'center',
        justifyContent: 'center'
    },
    flagText: {
        justifyContent: 'center',
        textAlign: 'center'
    }
});

export default Flag;