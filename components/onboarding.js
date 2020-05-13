import React, {Component} from 'react';
import {styles} from "../assets/style";
import {Text, View} from "react-native";
import {connect} from 'react-redux';

import Flag from "./flag";


class Onboarding extends Component {
    render() {
        return (
            <View style={styles.root}>
                <Text style={styles.appTitle}
                      allowFontScaling={false}
                >Guide for {"\n"} World Heritage Passport</Text>
                <View style={[styles.container, styles.row]}>
                    <Flag
                        flag={'Hungary'}
                        text={'Magyar'}
                        langPref={'hu'}
                    />
                    <Flag
                        flag={'Germany'}
                        text={'Deutsch'}
                        langPref={'de'}
                    />
                    <Flag
                        flag={'English'}
                        text={'English'}
                        langPref={'en'}
                    />
                    <Flag
                        flag={'Slovakia'}
                        text={'Slovenský'}
                        langPref={'sk'}
                    />
                    <Flag
                        flag={'Italy'}
                        text={'Italiano'}
                        langPref={'it'}
                    />
                    <Flag
                        flag={'Romania'}
                        text={'Română'}
                        langPref={'ro'}

                    />
                </View>
            </View>
        );
    }
}



export default connect()(Onboarding);