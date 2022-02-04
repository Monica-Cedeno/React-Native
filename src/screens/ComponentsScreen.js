// each component is made up of 4 different parts
// part 1 is create libraries that we need to create component
import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

// part 2 build the component that returns some JSX
const ComponentsScreen = () => {
    const name = "Monica"
    return (
    <View>
        <Text style={styles.textStyle}>Getting started with react native </Text>
        <Text style={styles.subHeaderStyle}>My name is {name}</Text>
    </View>
    )
};

// part 3 create a stylesheet
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
    });

// part 4 export the component to it can be used elsewhere
export default ComponentsScreen

