import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, Picker, Button, SafeAreaView, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {Ionicons, Entypo, EvilIcons} from "@expo/vector-icons";
import {setLangPref} from "../actions";
import {styles} from "../assets/style";
import {getTranslation} from "../translations/translations";

class Settings extends Component {
    state = {
        langPref: this.props.langPref,
        isModalOpen: false
    };

    toggleModal = () => {
        this.setState({isModalOpen: !this.state.isModalOpen})
    }

    renderLanguagePicker = () => {
        if(Platform.OS === 'ios') {
            return (
                <View>
                    <TouchableOpacity
                        onPress={() => {
                            this.toggleModal();
                        }}
                    >
                        <View style={styles.languageSelectButton}>
                            <Text style={styles.languageSelectButtonText}>
                                {getTranslation('languagePickerText')}
                            </Text>
                            <Text style={styles.languageSelectButtonCurrentLanguage}>
                                {getTranslation('languageName')}
                            </Text>
                            <Entypo
                                name="chevron-thin-right"
                                size={18}
                                color="#8c8c8e"
                                style={styles.languageSelectButtonArrow}
                            />
                        </View>
                    </TouchableOpacity>
                    <Modal
                        animationType={'slide'}
                        isVisible={this.state.isModalOpen}
                        style={styles.modalStyle}
                        onRequestClose={() => this.toggleModal()}
                        swipeDirection={"down"}
                        onSwipeComplete={() => {
                            this.toggleModal()
                        }}
                        onBackdropPress={() => this.toggleModal()}
                        //presentationStyle="pageSheet"

                    >
                        <View style={styles.modalContent}>
                            <Picker
                                selectedValue={this.props.langPref}
                                onValueChange={(itemValue) => this.props.setLangPref(itemValue)}>
                                <Picker.Item label="Magyar" value="hu"/>
                                <Picker.Item label="German" value="de"/>
                                <Picker.Item label="English" value="en"/>
                                <Picker.Item label="Slovenský" value="sk"/>
                                <Picker.Item label="Italiano" value="it"/>
                                <Picker.Item label="Română" value="ro"/>
                            </Picker>
                        </View>
                    </Modal>
                </View>

            )
        } else {
            return (
                <View>
                    <Picker
                        selectedValue={this.props.langPref}
                        onValueChange={(itemValue) => this.props.setLangPref(itemValue)}>
                        <Picker.Item label="Magyar" value="hu"/>
                        <Picker.Item label="German" value="de"/>
                        <Picker.Item label="English" value="en"/>
                        <Picker.Item label="Slovenský" value="sk"/>
                        <Picker.Item label="Italiano" value="it"/>
                        <Picker.Item label="Română" value="ro"/>
                    </Picker>
                </View>

            )
        }
    }

    render() {
        return (
            <SafeAreaView>
                <Text style={styles.viewTitle}>{getTranslation('settings')}</Text>
                {this.renderLanguagePicker()}
                {
                    (__DEV__) ?
                        <Button
                            title={'Reset language'}
                            onPress={() => {
                                this.props.setLangPref(null);
                            }}
                        />
                        : null
                }
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        langPref: state.languageReducer.langPref
    }
};

export default connect(mapStateToProps, {setLangPref})(Settings);