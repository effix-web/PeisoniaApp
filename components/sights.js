import React, {Component} from 'react';
import {SafeAreaView, View, Text, ScrollView, FlatList, SectionList, StatusBar} from "react-native";

import {connect} from 'react-redux';
import {withNavigation} from "react-navigation";
import {getTranslation} from "../translations/translations";
import SightListItem from "./sightListItem";
import {homeStyles, sightListItemStyles, styles} from "../assets/style";
import {Platform} from "react-native";
import Footer from './footer';


class Sights extends Component {
    constructor(props) {
        super(props);

        this.renderHeader = this.renderHeader.bind(this);
    }

    state = {
        sights: getTranslation('sights')
    }

    renderHeader = (title) => {
        return (<Text style={[styles.viewTitle, styles.sectionTitle]}>{title}</Text>)
    };

    renderSights = () => {
        let sights = getTranslation('sights');

        if(sights) {
            /*return (
                <SectionList
                    data={sights}
                    sections={[
                        {
                            title: getTranslation('sightsTitle'),
                            data: sights
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
                    stickySectionHeadersEnabled={false}
                />
            )*/
            return (
                sights.map((sight) => {
                    return (<SightListItem
                            key={sight.title}
                            sight={sight}
                        />
                    )
                })
            )
        }

        //In case Sights is empty which should not happen
        return (
            <View>
                <Text style={styles.viewTitle}>{getTranslation('sightsTitle')}</Text>
                <Text style={[sightListItemStyles.sightLocation, {paddingLeft: 20}]}>This shouldn't be empty</Text>
            </View>
        )
    }


    render() {
        return (
            <SafeAreaView style={homeStyles.homeWrapper}>
                <ScrollView>
                    <StatusBar
                        backgroundColor={'transparent'}
                        barStyle={'dark-content'}
                    />
                    {this.renderHeader(getTranslation('sightsTitle'))}
                    {this.renderSights()}
                    <Footer/>
                </ScrollView>
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