import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Button} from "react-native";
import {Audio, AVPlaybackStatus} from "expo-av";
import {Ionicons} from '@expo/vector-icons';

import {attractionStyles} from "../assets/style";


class Attraction extends Component {
    state = {
        attraction: this.props.data,
        isOpen: false,
        isPlaying: false,
        playbackInstance: null,
        currentIndex: 0,
        volume: 1.0,
        isBuffering: false
    };

    async componentDidMount() {
        try {
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: false,
                interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
                playsInSilentModeIOS: true,
                interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
                shouldDuckAndroid: true,
                staysActiveInBackground: true,
                playThroughEarpieceAndroid: true
            });

            this.loadAudio()
        } catch (e) {
            console.log(e)
        }
    }

    async loadAudio() {
        const {currentIndex, isPlaying, volume} = this.state;

        try {
            const playbackInstance = new Audio.Sound();
            const source = {
                uri: this.state.attraction.audio
            };

            const status = {
                shouldPlay: isPlaying,
                volume
            };

            playbackInstance.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate);
            await playbackInstance.loadAsync(source, status, false);
            this.setState({playbackInstance})
        } catch (e) {
            console.log(e)
        }
    }

    onPlaybackStatusUpdate = status => {
        this.setState({
            isBuffering: status.isBuffering
        });
    };

    toggleAccordion = () => {
        if (this.state.isOpen) {
            this.setState({isOpen: false});
        } else {
            this.setState({isOpen: true});
        }
    };

    handlePlayPause = async () => {
        const { isPlaying, playbackInstance } = this.state;
        isPlaying ? await playbackInstance.pauseAsync() : await playbackInstance.playAsync();

        this.setState({
            isPlaying: !isPlaying
        })
    };

    handlePreviousTrack = async () => {
        let { playbackInstance, currentIndex } = this.state;
        if (playbackInstance) {
            await playbackInstance.unloadAsync()
            currentIndex < audioBookPlaylist.length - 1 ? (currentIndex -= 1) : (currentIndex = 0);
            this.setState({
                currentIndex
            });
            this.loadAudio()
        }
    };

    handleNextTrack = async () => {
        let { playbackInstance, currentIndex } = this.state;
        if (playbackInstance) {
            await playbackInstance.unloadAsync();
            currentIndex < audioBookPlaylist.length - 1 ? (currentIndex += 1) : (currentIndex = 0);
            this.setState({
                currentIndex
            });
            this.loadAudio()
        }
    };

    render() {
        console.warn(this.state.audioPlayer);
        return (
            <View
                style={[attractionStyles.attractionWrapper, (this.state.isOpen) ? attractionStyles.attractionOpen : null]}>
                <TouchableOpacity onPress={() => this.toggleAccordion()}>
                    <Text style={attractionStyles.attractionTitle}>{this.state.attraction.title}</Text>
                </TouchableOpacity>
                <Button
                    title={"Play"}
                    onPress={() => {

                        this.handlePlayPause()

                    }}
                />
                <Text>{}</Text>

            </View>
        );
    }
}

export default Attraction;