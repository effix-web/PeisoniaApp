import {AsyncStorage} from "react-native";

export async function getData (key) {
    try {
        const value = await AsyncStorage.getItem(key, (data) => {
            console.warn(data);
        });
        if(value !== null) {
            return value;
            // value previously stored
        }
    } catch(e) {
        console.error('Error in getData(): ' + e);
        // error reading value
    }
}

export const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem("@AppStore:" + key, value);
    } catch (e) {
        console.error(e);
        // saving error
    }
};