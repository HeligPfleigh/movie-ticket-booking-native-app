import React from 'react';
import { View, ScrollView, Text, Alert, StyleSheet } from 'react-native';
import { movies } from './data';
import MoviePoster from './MoviePoster';
import MoviePopup from './MoviePopup';

export default class Movies extends React.Component{
    static navigationOptions = {
        title: 'Welcome'
    };

    constructor(){
        super();
        this.state = {
            popupIsOpen: false
        }
    }

    openMovie = (movie) => {
        this.setState({
            popupIsOpen: true,
            movie
        })
    }

    closeMovie = () => {
        this.setState({
            popupIsOpen: false
        })
    }

    render(){
        return (
            <View style={styles.container}>
                <ScrollView 
                    contentContainerStyle={styles.scrollContent}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >
                    {movies.map((movie, index) => {
                        return(
                        <MoviePoster 
                            key={index} 
                            movie={movie}
                            onOpen={this.openMovie}
                        />
                        )
                    }, this)}
                </ScrollView>
                <MoviePopup 
                    movie={this.state.movie}
                    isOpen={this.state.popupIsOpen}
                    onClose={this.closeMovie}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 20
    },
    scrollContent:{
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})