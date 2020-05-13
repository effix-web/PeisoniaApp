import React, {Component} from 'react';
import {SafeAreaView, View, Text, ScrollView, FlatList, SectionList, StatusBar} from "react-native";

import {connect} from 'react-redux';
import {withNavigation} from "react-navigation";
import {getTranslation} from "../translations/translations";
import SightListItem from "./sightListItem";
import {homeStyles, styles} from "../assets/style";
import {Platform} from "react-native";


class Sights extends Component {
    constructor(props) {
        super(props);

        this.renderHeader = this.renderHeader.bind(this);
    }

    renderHeader = (title) => {
        return (<Text style={[styles.viewTitle, styles.sectionTitle]}>{title}</Text>)
    };


    render() {
        return (
            <SafeAreaView style={homeStyles.homeWrapper}>
                <StatusBar
                    backgroundColor={'transparent'}
                    translucent={true}
                    barStyle={'dark-content'}
                />


                <SectionList
                    data={getTranslation('sights')}
                    sections={[
                        {
                            title: getTranslation('sightsTitle'),
                            data: getTranslation('sights')
                        }
                    ]}
                    renderItem={({item}) => (
                        <SightListItem
                            sight={item}
                        />
                    )}
                    renderSectionHeader={({section: {title}}) => (
                        this.renderHeader(title)
                    )}
                    keyExtractor={item => item.title}
                    stickySectionHeadersEnabled={true}
                />
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        langPref: state.languageReducer.langPref,
        sight: state.sightReducer
    }
};


export default connect(mapStateToProps)(withNavigation(Sights));