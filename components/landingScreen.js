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
import {Ionicons} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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
        return (
            <NavigationContainer ref={navigationRef}>
                {
                    (this.props.language !== null) ?
                        <Tab.Navigator
                            initialRouteName={"Home"}
                            screenOptions={({ route }) => ({
                                tabBarIcon: ({ focused, color, size }) => {
                                    let iconName;

                                    if (route.name === 'Home') {
                                        iconName = focused
                                            ? 'ios-list-box'
                                            : 'ios-list';
                                        color = focused
                                            ? '#76c1b1'
                                            : color
                                    } else if (route.name === 'Settings') {
                                        iconName = 'ios-settings';
                                        color = focused
                                            ? '#76c1b1'
                                            : color
                                    } else if(route.name === 'Onboarding') {
                                        size = 0
                                    }

                                    // You can return any component that you like here!
                                    return <Ionicons name={iconName} size={size} color={color} />;
                                },
                            })}
                            tabBarOptions={{
                                activeTintColor: '#76c1b1'
                            }}
                        >
                            <Tab.Screen
                                name="Home"
                                component={HomeScreen}
                                options={{
                                    title: getTranslation('homeTitle'),
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
                        :
                        <Stack.Navigator initialRouteName={'Onboarding'}>
                            <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown: false}}/>
                        </Stack.Navigator>
                }


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