import React, {useState} from 'react';
// useState is a hook, a function that adds new functionality to a function component. 
// We can make a special variable that react can watch and update the variable on screen
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
    // inside the square brackets we are doing an array destructuring, 
    // another way to pull element ofr reference to elements out of an array
    const [counter, setCounter] = useState(0);
    // useState gives us some data to track, you have to pass in the starting value
    return (
        <View>
            <Button 
                title = 'increase' 
                onPress={() => {
                // counter++;  ---> Dont do this, we dont modify a state variable directly 
                setCounter(counter + 1)
                }} />
            <Button 
                title = 'Decrease' 
                onPress={() => {
                setCounter(counter - 1)
                console.log(counter)
                }}/>
            <Text> Current Count: {counter} </Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;

