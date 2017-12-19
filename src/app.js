import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Text } from 'react-native';
import Movies from './Movies';



const Main = StackNavigator({
    Home: {screen: Movies},
});

export default Main;