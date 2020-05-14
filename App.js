import React from 'react';
import 'react-native-gesture-handler';
import {store, persistor} from './store/store';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Landing from "./components/landingScreen";

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Landing/>
            </PersistGate>
        </Provider>


    );
}