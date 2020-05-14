import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Animated} from "react-native";
import {Audio, AVPlaybackStatus} from "expo-av";
import {Ionicons} from '@expo/vector-icons';
import AudioPlayer from "./audioPlayer";
import {attractionStyles} from "../assets/style";


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
                    <Text style={attractionStyles.attractionTitle}>{this.state.attraction.title}</Text>
                </TouchableOpacity>
                <View
                    style={[attractionStyles.attractionContentWrapper, (this.state.isOpen) ? attractionStyles.attractionOpen : null]}>
                    <AudioPlayer
                        source={this.state.attraction.audio}
                    />
                </View>

            </View>
        );
    }
}

export default Attraction;