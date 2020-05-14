import React, {Component} from 'react';
import {View} from 'react-native';
import {attractionStyles} from "../assets/style";
import {Ionicons} from "@expo/vector-icons";
import {Audio} from "expo-av";

class AudioPlayer extends Component {
    state = {
        source: this.props.source,
        isPlaying: false,
        playbackInstance: null,
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
            //console.log(e)
        }
    }

    async loadAudio() {
        const {isPlaying, volume} = this.state;

        try {
            const playbackInstance = new Audio.Sound();
            const source = this.state.source;

            const status = {
                shouldPlay: isPlaying,
                volume
            };

            playbackInstance.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate);
            await playbackInstance.loadAsync(source, status, false);
            this.setState({playbackInstance});
        } catch (e) {
            console.error(e);
        }
    }

    onPlaybackStatusUpdate = status => {
        this.setState({
            isBuffering: status.isBuffering
        });
    };



    handlePlayPause = async () => {
        const { isPlaying, playbackInstance } = this.state;
        isPlaying ? await playbackInstance.pauseAsync() : await playbackInstance.playAsync();

        this.setState({
            isPlaying: !isPlaying
        })
    };

    handlePreviousTrack = async () => {
        /*let { playbackInstance } = this.state;
        if (playbackInstance) {
            await playbackInstance.unloadAsync()
            //currentIndex < audioBookPlaylist.length - 1 ? (currentIndex -= 1) : (currentIndex = 0);
            this.setState({
                currentIndex
            });
            this.loadAudio()
        }*/
    };

    handleNextTrack = async () => {
        /*let { playbackInstance } = this.state;
        if (playbackInstance) {
            await playbackInstance.unloadAsync();
            //currentIndex < audioBookPlaylist.length - 1 ? (currentIndex += 1) : (currentIndex = 0);
            this.setState({
                currentIndex
            });
            this.loadAudio()
        }*/
    };

    render() {
        return (
            <View>
                <Ionicons
                    name={this.state.isPlaying ? 'ios-pause' : 'ios-play-circle'}
                    size={48}
                    color='#444'
                    onPress={() => {
                        this.handlePlayPause();
                    }}
                />
            </View>
        );
    }
}

export default AudioPlayer;