// I am a CHILD of ImageScreen
import React from 'react' 
import { View, Text, StyleSheet, Image } from 'react-native'

const ImageDetail = (props) => {
    return <View>
        <Image source={props.imageSource} />
        <Text> {props.title} </Text>
        <Text> rating = {props.rating}</Text>
        </View>
};



const styles = StyleSheet.create({});

export default ImageDetail;