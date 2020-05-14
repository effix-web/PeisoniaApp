import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { connect } from 'react-redux';
import {setLangPref} from "../actions";

import FlagHungary from '../assets/flags/flag_hungary.png';
import FlagGermany from '../assets/flags/flag_germany.png';
import FlagEnglish from '../assets/flags/flag_english.png';
import FlagSlovakian from '../assets/flags/flag_slovakia.png';
import FlagItaly from '../assets/flags/flag_italy.png';
import FlagRomania from '../assets/flags/flag_romania.png';

import {flagStyles} from '../assets/style';
import {navigate} from "../utils/rootNavigation";

class Flag extends Component {
    constructor(props) {
        super(props);
    }

    GetFlag = (flagString) => {
        switch (flagString.toLowerCase()) {
            case 'hungary':
                return FlagHungary;
            case 'germany':
                return FlagGermany;
            case 'english':
                return FlagEnglish;
            case 'slovakia':
                return FlagSlovakian;
            case 'romania':
                return FlagRomania;
            case 'italy':
                return FlagItaly;

        }
    };

    OnFlagPress = (flagString) => {
        //console.warn(flagString);
        this.props.setLangPref(flagString.toLowerCase());
        //navigate('Sights');
    };

    render() {
        return (
            <View style={flagStyles.flagWrapper}>
                <TouchableOpacity
                    style={flagStyles.flagButton}
                    onPress={() => {
                        this.OnFlagPress(this.props.langPref)
                    }}>
                    <Image
                        style={flagStyles.flagImage}
                        source={this.GetFlag(this.props.flag)}
                    />
                    <Text style={flagStyles.flagText}>
                        {this.props.text}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect(null, {setLangPref})(Flag);