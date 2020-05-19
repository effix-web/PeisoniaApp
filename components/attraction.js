import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Animated, ScrollView} from "react-native";
import {Audio, AVPlaybackStatus} from "expo-av";
import {Ionicons} from '@expo/vector-icons';
import AudioPlayer from "./audioPlayer";
import {attractionStyles, styles} from "../assets/style";


class Attraction extends Component {
    state = {
        attraction: this.props.data,
        isOpen: false,
        isPlaying: false,
        playbackInstance: null,
        volume: 1.0,
        isBuffering: false
    };

    toggleAccordion = () => {
        if (this.state.isOpen) {
            this.setState({isOpen: false});
        } else {
            this.setState({isOpen: true});
        }
    };

    render() {
        return (
            <View style={[attractionStyles.attractionWrapper]}>
                <TouchableOpacity onPress={() => this.toggleAccordion()}>
                    <View style={styles.row}>
                        <Text style={attractionStyles.attractionTitle}>{this.state.attraction.title}</Text>
                        <Ionicons
                            style={[attractionStyles.arrow,
                                (this.state.isOpen) ?
                                    {transform: [{rotate: '180deg'}]}
                                : ''
                            ]}
                            name={'ios-arrow-down'}
                            size={24}
                            color={'#444'}
                        />
                    </View>
                </TouchableOpacity>
                <View
                    style={[attractionStyles.attractionContentWrapper, (this.state.isOpen) ? attractionStyles.attractionOpen : null]}>
                    <AudioPlayer
                        source={this.state.attraction.audio}
                    />
                    <ScrollView style={attractionStyles.attractionTextWrapper}>
                        <Text style={attractionStyles.attractionText}>{this.state.attraction.content}</Text>
                    </ScrollView>

                </View>

            </View>
        );
    }
}

export default Attraction;