import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {getTranslation} from "../translations/translations";
import {footerStyle} from "../assets/style";

class Footer extends Component {
    render() {
        return (
            <View style={footerStyle.footerWrapper}>
                <Text style={footerStyle.footerText}>
                    {getTranslation('projectInfo')}
                </Text>
            </View>
        );
    }
}

export default Footer;