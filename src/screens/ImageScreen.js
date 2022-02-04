// I am a PARENT of ImageDetail
import React from 'react' 
import { View, Text, StyleSheet, Button } from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
    return <View>
            <ImageDetail 
            title="Forest" 
            imageSource={require('../../assets/forest.jpg')} 
            rating={5}
            />
            <ImageDetail 
            title="Beach" 
            imageSource={require('../../assets/beach.jpg')}
            rating={8}
            />
            <ImageDetail 
            title="Mountain" 
            imageSource={require('../../assets/mountain.jpg')}
            rating={2}
            />
        </View>
};



const styles = StyleSheet.create({});

export default ImageScreen;