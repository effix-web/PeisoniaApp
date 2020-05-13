import {SET_LANGUAGE_PREF} from "../actions";

// Initial State
const initialState = {
    langPref: null,
};

// Reducers (Modifies The State And Returns A New State)
const languageReducer = (state = initialState, action) => {
    switch (action.type) {    // Login
        case SET_LANGUAGE_PREF: {
            //console.warn(action.payload);
            return {
                // State
                ...state,
                // Redux Store
                langPref: action.payload,
            }
        }    // Default
        default: {
            return state;
        }
    }
};
// Exports
export default languageReducer;