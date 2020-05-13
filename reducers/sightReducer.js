import {SET_CURRENT_SIGHT} from "../actions";

// Initial State
const initialState = null;

// Reducers (Modifies The State And Returns A New State)
const sightReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_SIGHT: {
            return {
                ...state,
                sight: action.payload
            }
        }    // Default
        default: {
            return state;
        }
    }
};
// Exports
export default sightReducer;