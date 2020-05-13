import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from "react-native";
import {navigate, navigationRef} from "../utils/rootNavigation";
import {connect} from 'react-redux';


import {sightListItemStyles} from "../assets/style";
import {setCurrentSight} from "../actions";

function SightListItem({sight, setCurrentSight}) {
    return (
        <TouchableOpacity onPress={() => {
            setCurrentSight(sight);
            navigate('Sight', {
                bannerImg: sight.bannerImg
            });

        }}>
            <View style={sightListItemStyles.sightListWrapper}>
                <Text style={sightListItemStyles.sightListTitle}>{sight.title}</Text>
                <Text style={sightListItemStyles.sightLocation}>{sight.location}</Text>
            </View>
        </TouchableOpacity>
    );

}

export default connect(null, {setCurrentSight})(SightListItem);