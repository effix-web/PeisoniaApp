import React, {Component} from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {getTranslation} from "../translations/translations";
import {connect} from 'react-redux';

import Sights from './sights';
import Settings from "./settings";
import Sight from "./sight";
import BottomTabNavigator from "@react-navigation/bottom-tabs/src/navigators/createBottomTabNavigator";
import Onboarding from "./onboarding";
import {Button, Platform} from "react-native";
import {styles} from "../assets/style";
import {HeaderButton, HeaderButtons, Item} from "react-navigation-header-buttons";
import {createStackNavigator} from "@react-navigation/stack";


const Stack = createStackNavigator();

function HomeScreen(props) {
    return (
        <Stack.Navigator initialRouteName={(props.language != null) ? 'Sights' : 'Onboarding'}>
            <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown: false}}/>
            <Stack.Screen
                name="Sights"
                component={Sights}
                options={{
                    headerShown: false,
                    setBarStyle: {
                        lightContent: true
                    }
                }}
            />
            <Stack.Screen
                name="Settings"
                component={Settings}
                options={{
                    title: getTranslation('settings')
                }}
            />
            <Stack.Screen
                name={"Sight"}
                component={Sight}
                options={{
                    title: '',
                    headerShown: true,
                    headerBackTitle: getTranslation('sightsTitle'),
                    headerTransparent: true,
                    headerTintColor: '#fff',
                    headerStyle: {
                        //backgroundColor: 'transparent'
                    }
                }}
            />
        </Stack.Navigator>
    );
}

const mapStateToProps = (state) => {
    // Redux Store --> Component
    return {
        language: state.languageReducer.langPref
    };
};

export default connect(mapStateToProps)(HomeScreen);