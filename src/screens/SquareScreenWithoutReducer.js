import React, {useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import { set } from "react-native-reanimated";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15

const SquareScreen = () => {
    //3 sep pieces of state, red, green, blue
    const [red, setRed] = useState(0);
    const[green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor = (color, change) => {
// color ==='red,'blue', green'
// change === +15, -15

//lines 17-28 allows us to set limits so the user cannot 
//go below 0 or above the 255 rbg with the hopes of a better UX
//since they wont have to tap increase or decrease as many times to get the square
//to display changes 
    switch (color) {
        //switch is a more specific if/else statement 
        case 'red':
        // an attempt at ternery expression
            red + change > 255 || red + change < 0 ? null : setRed(red + change);
            // ? means that we want to rrun this expression if its true, the null means it wont do anything if outside the bounds of red
            // the : after null indicates what we do want it to do
            // if (red + change > 255 || red + change < 0) {
            //     return;
            // } else {
            //     setRed(red + change);
            // }
            return;
        
        case 'green':
            green + change > 255 || green + change < 0 ? null : setGreen(green + change);
            return;
        
        case 'blue':
            blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
            return;
        default:
        //by convention a default case is created where if the colors arent red,blue, green it will just return
            return;
    }
    };

    return (
    <View>
        <ColorCounter 
        onIncrease={() => setColor('red', COLOR_INCREMENT)} 
        onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)} 
        color="Red" 
        />
        <ColorCounter 
        onIncrease={() => setColor('blue', COLOR_INCREMENT)} 
        onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)} 
        color="Blue" 
        />
        <ColorCounter 
        onIncrease={() => setColor('green', COLOR_INCREMENT)} 
        onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)} 
        color="Green" 
        />
        <View style={{
            height: 150, 
            width: 150, 
            backgroundColor: `rgb(${red}, ${green}, ${blue})`
            }}
        />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;