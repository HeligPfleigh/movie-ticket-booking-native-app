import React, { Component } from 'react';
import { Dimensions, TouchableOpacity, View, Image, Text, 
    StyleSheet
} from 'react-native';
import { defaultStyles } from './styles';

const { width, height } = Dimensions.get('window');
const COLS = 3, ROWS = 3;

export default class MoviewPoster extends Component{
    render(){
        const {movie, movie:{title, genre, poster}, onOpen} = this.props;
        return(
            <TouchableOpacity style={styles.container} onPress={()=>onOpen(movie)}>
                <View style={styles.imageContainer}>
                    <Image source={{uri: poster}} style={styles.image}/>
                </View>
                <Text numberOfLines={1}>{title}</Text>
                <Text numberOfLines={1}>{genre}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginLeft: 10,
        marginBottom: 10,
        height: (height - 20 - 20) / ROWS - 10,
        width: (width - 10) / COLS - 10,
    },
    imageContainer:{
        flex: 1
    },
    image: {
        borderRadius: 10,                 // rounded corners
        ...StyleSheet.absoluteFillObject, // fill up all space in a container
    },
    title:{
        ...defaultStyles.text,
        fontSize: 14,
        marginTop: 4
    },
    genre:{
        ...defaultStyles.text,
        color: '#BBBBBB',
        fontSize: 12,
        lineHeight: 14
    }
})