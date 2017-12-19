import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Text } from 'react-native';
import Movies from './Movies';
import Chat from './Chat';



const Main = StackNavigator({
    Home: {screen: Movies},
    Chat: {screen: Chat}
});

export default Main;