// Imports: Dependencies
import { combineReducers } from 'redux';// Imports: Reducers
import languageReducer from './languageReducer';
import sightReducer from "./sightReducer";



// Redux: Root Reducer
const rootReducer = combineReducers({
    languageReducer: languageReducer,
    sightReducer: sightReducer
});
// Exports
export default rootReducer;