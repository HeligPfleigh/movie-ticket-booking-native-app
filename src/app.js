import React from 'react';
import { Text } from 'react-native';
import Movies from './Movies';
import { Router, Scene } from 'react-native-router-flux';
import Confirmation from './Confirmation';

const Main = () => {
    return(
        <Router>
            <Scene key="root">
                <Scene key='movie' component={Movies} title='Movies' initial/>
                <Scene key='confimation' component={Confirmation} title='Confirmation'/>
            </Scene>
        </Router>
    )
}

export default Main;