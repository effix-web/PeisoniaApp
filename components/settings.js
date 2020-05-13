import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, Picker, FlatList} from 'react-native';
import {setLangPref} from "../actions";

class Settings extends Component {
    state = {
        langPref: this.props.langPref,
    };

    render() {
        return (
            <View>
                <Text>Current lang: {this.props.langPref}</Text>
                <Picker
                    selectedValue={this.props.langPref}
                    onValueChange={(itemValue, itemIndex) => this.props.setLangPref(itemValue)}>
                    <Picker.Item label="Magyar" value="hu" />
                    <Picker.Item label="German" value="de" />
                    <Picker.Item label="English" value="en" />
                    <Picker.Item label="Slovenský" value="sk" />
                    <Picker.Item label="Italiano" value="it" />
                    <Picker.Item label="Română" value="ro" />
                </Picker>

            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        langPref: state.languageReducer.langPref
    }
};

export default connect(mapStateToProps, {setLangPref})(Settings);