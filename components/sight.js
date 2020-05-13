import React, {Component} from 'react';
import {SafeAreaView, View, Text, FlatList, StatusBar, Button} from "react-native";
import {Image} from 'react-native-elements';
import {navigationRef, navigate} from "../utils/rootNavigation";
import {withNavigation} from "react-navigation";
import {connect} from 'react-redux';
import * as Linking from 'expo-linking';
import { Audio } from 'expo-av';

import {getTranslation} from "../translations/translations";
import {sightStyles, styles} from "../assets/style";
import Attraction from "./attraction";

class Sight extends Component {
    constructor(props) {
        super(props);
    }

    state = this.props.sight;



    render() {
        return (
            <View style={sightStyles.sightWrapper} forceInset={{top: 'never'}}>
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
                                onPress={() => {Linking.openURL(this.state.mapLink)}}
                            >{getTranslation('sightMapLinkText')}</Text>
                            <Text style={[sightStyles.sightSubTitle, {paddingRight: 0, paddingLeft: 0}]} > - </Text>
                            <Text style={[sightStyles.sightSubTitle, {paddingLeft: 5}]}>{this.state.coordinates}</Text>
                        </View>
                    </View>
                </View>
                <FlatList
                    data={this.state.attractions}
                    renderItem={({ item }) => <Attraction data={item} />}
                    keyExtractor={item => item.title}
                />
                {/*<Button
                    title={"Play"}
                    onPress={() => {this.playAudio(this.state.attractions[0].audio)}}
                />*/}

            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sight: state.sightReducer.sight
    }
};

export default connect(mapStateToProps)(withNavigation(Sight));