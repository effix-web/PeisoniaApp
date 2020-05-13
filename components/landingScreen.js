import React, {Component} from 'react';
import {Text, Platform} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {connect} from 'react-redux';
import {Item, HeaderButtons, HeaderButton} from 'react-navigation-header-buttons';

import Onboarding from "./onboarding";
import Sights from "./sights";
import Settings from './settings';
import {Button} from "react-native";
import {navigationRef} from "../utils/rootNavigation";
import {getTranslation} from "../translations/translations";
import {styles} from "../assets/style";
import Sight from "./sight";
import HomeScreen from "./homeScreen";

const Tab = createBottomTabNavigator();

/*<Button
    title={this.getSettingsText()}
    onPress={() => {
        navigation.navigate('Settings')
    }}
    options={{
        title: this.getSettingsText()
    }}
    style={styles.settingsButton}
/>*/

class LandingScreen extends Component {

    getHomeTitle = () => {
        return getTranslation('homeTitle');
    };

    getSettingsText = () => {
        return getTranslation('settings');
    };

    render() {
        //console.warn(this.props.languageState);
        return (
            <NavigationContainer ref={navigationRef}>
                <Tab.Navigator
                    initialRouteName={"Home"}
                >
                    <Tab.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{
                            title: getTranslation('homeTitle')
                        }}
                    />
                    <Tab.Screen
                        name="Settings"
                        component={Settings}
                        options={{
                            title: getTranslation('settings')
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}

const mapStateToProps = (state) => {
    // Redux Store --> Component
    return {
        language: state.languageReducer.langPref
    };
};

export default connect(mapStateToProps)(LandingScreen);