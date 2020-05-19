import React, {Component} from 'react';
import {View, Text, Slider, TouchableOpacity} from 'react-native';
import {attractionStyles} from "../assets/style";
import {Ionicons} from "@expo/vector-icons";
import {Audio} from "expo-av";
import {styles, audioPlayerStyles} from "../assets/style";


class AudioPlayer extends Component {
    isSeeking = false;
    shouldBePlaying = false;
    scrobbleIntervalHandle = null;

    scrobbleAmount = 1000;
    scrobbleInteraval = 250;

    state = {
        source: this.props.source,
        isPlaying: false,
        playbackInstance: null,
        volume: 1.0,
        isBuffering: false,
        currentTimeInSeconds: 0,
        currentTimeInMillis: 0,
        durationInSeconds: 0,
        durationInMillis: 0,
        currentProgressPercent: 0
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
            playbackInstance.getStatusAsync().then((status) => {
                this.setState({
                    playbackInstance,
                    durationInSeconds: Math.floor(status.durationMillis / 1000),
                    durationInMillis: status.durationMillis
                });
            });

        } catch (e) {
            console.error(e);
        }
    }

    onPlaybackStatusUpdate = status => {
        this.setState({
            isBuffering: status.isBuffering,
            currentTimeInSeconds: Math.floor(status.positionMillis / 1000),
            currentTimeInMillis: status.positionMillis,
            currentProgressPercent: ((Math.floor(status.positionMillis / 1000) / this.state.durationInSeconds) * 100).toFixed(2)
        });
    };


    handlePlayPause = async () => {
        const {isPlaying, playbackInstance} = this.state;
        isPlaying ? await playbackInstance.pauseAsync() : await playbackInstance.playAsync();

        this.setState({
            isPlaying: !isPlaying
        });
    };

    componentWillUnmount() {
        if (this.state.isPlaying) this.handlePlayPause();
    }

    convertToMinutesSeconds(timeInSeconds) {
        let minutes = Math.floor(timeInSeconds / 60);
        let seconds = timeInSeconds - minutes * 60;

        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        return minutes + ":" + seconds;
    }

    handleFastForwardStart = () => {
        let {playbackInstance} = this.state;

        this.shouldBePlaying = this.state.isPlaying;

        if (playbackInstance !== null && this.scrobbleIntervalHandle == null) {
            this.scrobbleIntervalHandle = setInterval(async () => {
                const seekPosition = this.state.currentTimeInMillis + this.scrobbleAmount;

                if (this.state.isPlaying) {
                    await this.handlePlayPause().then(() => {
                        this.state.playbackInstance.setPositionAsync(seekPosition);
                    });

                } else {
                    this.state.playbackInstance.setPositionAsync(seekPosition);
                }

            }, this.scrobbleInteraval);
        }
    };

    handleFastForwardEnd = () => {
        if (this.scrobbleIntervalHandle) {
            clearInterval(this.scrobbleIntervalHandle);
            this.scrobbleIntervalHandle = null;


            if (this.shouldBePlaying) {
                this.handlePlayPause();
            }
        }
    }

    handleRewindStart = () => {
        let {playbackInstance} = this.state;


        this.shouldBePlaying = this.state.isPlaying;

        if (playbackInstance !== null && this.scrobbleIntervalHandle == null) {
            this.scrobbleIntervalHandle = setInterval(async () => {
                const seekPosition = this.state.currentTimeInMillis - this.scrobbleAmount;

                if (this.state.isPlaying && seekPosition >= 0) {
                    await this.handlePlayPause().then(() => {
                        this.state.playbackInstance.setPositionAsync(seekPosition);
                    });

                } else {
                    this.state.playbackInstance.setPositionAsync(seekPosition);
                }

            }, this.scrobbleInteraval);
        }
    };

    handleRewindEnd = () => {
        if (this.scrobbleIntervalHandle) {
            clearInterval(this.scrobbleIntervalHandle);
            this.scrobbleIntervalHandle = null;


            if (this.shouldBePlaying) {
                this.handlePlayPause();
            }
        }
    }

    onSeekSliderValueChange = (value) => {
        if (this.state.playbackInstance != null && !this.isSeeking) {
            this.isSeeking = true;
            this.state.playbackInstance.pauseAsync();
        }
    }

    onSeekSliderSlidingComplete = async (value) => {
        if (this.state.playbackInstance != null) {
            this.isSeeking = false;
            const seekPosition = (value * this.state.durationInMillis) / 100;

            if (this.state.isPlaying) {
                this.state.playbackInstance.playFromPositionAsync(seekPosition);
            } else {
                this.state.playbackInstance.setPositionAsync(seekPosition);
            }

        }
    }


    render() {
        return (
            <View style={[audioPlayerStyles.playerWrapper]}>
                <Slider
                    style={audioPlayerStyles.playerSlider}
                    minimumValue={0}
                    maximumValue={100}
                    value={(!isNaN(this.state.currentProgressPercent)) ? this.state.currentProgressPercent : 0}
                    onValueChange={this.onSeekSliderValueChange}
                    onSlidingComplete={this.onSeekSliderSlidingComplete}
                />
                <View style={[styles.row, audioPlayerStyles.playerTimeWrapper]}>
                    <Text style={audioPlayerStyles.playerCurrentTime}>
                        {this.convertToMinutesSeconds(this.state.currentTimeInSeconds)}
                    </Text>
                    <Text style={audioPlayerStyles.playerDurationTime}>
                        {this.convertToMinutesSeconds(this.state.durationInSeconds)}
                    </Text>
                </View>

                {/*<Text>{(!isNaN(this.state.currentProgressPercent)) ? this.state.currentProgressPercent : 0}</Text>*/}
                <View style={[styles.row, audioPlayerStyles.playerControls]}>
                    <TouchableOpacity
                        onPressIn={() => this.handleRewindStart()}
                        onPressOut={() => this.handleRewindEnd()}
                    >
                        <Ionicons
                            name={'ios-rewind'}
                            size={36}
                            color='#444'
                        />
                    </TouchableOpacity>
                    <Ionicons
                        name={this.state.isPlaying ? 'ios-pause' : 'ios-play-circle'}
                        size={48}
                        color='#444'
                        style={audioPlayerStyles.playButton}
                        onPress={() => {
                            this.handlePlayPause();
                        }}
                    />
                    <TouchableOpacity
                        onPressIn={() => this.handleFastForwardStart()}
                        onPressOut={() => this.handleFastForwardEnd()}
                    >
                        <Ionicons
                            name={'ios-fastforward'}
                            size={36}
                            color='#444'
                        />
                    </TouchableOpacity>

                </View>

            </View>
        );
    }
}

export default AudioPlayer;