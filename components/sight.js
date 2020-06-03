import React, {Component} from 'react';
import {ScrollView, View, Text, FlatList, StatusBar, Clipboard, Alert} from "react-native";
import {Image} from 'react-native-elements';
import {withNavigation} from "react-navigation";
import {connect} from 'react-redux';
import * as Linking from 'expo-linking';

import {getTranslation} from "../translations/translations";
import {sightStyles, styles} from "../assets/style";
import Attraction from "./attraction";

class Sight extends Component {
    constructor(props) {
        super(props);
    }

    state = this.props.sight;


    onCoordinatesPress = async (coordinate) => {
        await Clipboard.setString(coordinate);
        Alert.alert(
            getTranslation('alertTitle'),
            getTranslation('alertText')
        )
    };

    renderAttractions = () => {
        if(this.state.attractions) {
            return this.state.attractions.map((item) => {
                return (<Attraction data={item} key={item.title}/>)
            });
        }

    }

    render() {
        return (
            <ScrollView style={[sightStyles.sightWrapper]} forceInset={{top: 'never'}}>
                <StatusBar
                    backgroundColor={'transparent'}
                    translucent={true}
                    barStyle={'light-content'}
                />
                <View style={sightStyles.sightBanner}>
                    <Image source={this.state.bannerImg} style={sightStyles.sightBannerImage}/>
                    <View style={sightStyles.sightBannerTextWrapper}>
                        <Text style={sightStyles.sightTitle}>{this.state.title}</Text>
                        <Text style={sightStyles.sightSubTitle}>{this.state.address}</Text>
                        <View style={styles.row}>
                            <Text
                                style={[sightStyles.sightSubTitle, sightStyles.sightLink, {paddingRight: 5}]}
                                onPress={() => {
                                    Linking.openURL(this.state.mapLink)
                                }}
                            >{getTranslation('sightMapLinkText')}</Text>
                            <Text style={[sightStyles.sightSubTitle, {paddingRight: 0, paddingLeft: 0}]}> - </Text>
                            <Text style={[sightStyles.sightSubTitle, {paddingLeft: 5}]}
                                  onPress={() => {
                                      this.onCoordinatesPress(this.state.coordinates)
                                  }}
                            >
                                {this.state.coordinates}
                            </Text>
                        </View>
                    </View>
                </View>
                {this.renderAttractions()}
                {/*<FlatList
                    data={this.state.attractions}
                    renderItem={({ item }) => <Attraction data={item} />}
                    keyExtractor={item => item.title}
                />*/}
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sight: state.sightReducer.sight
    }
};

export default connect(mapStateToProps)(withNavigation(Sight));