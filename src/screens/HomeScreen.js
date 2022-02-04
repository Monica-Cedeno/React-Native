import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";

const HomeScreen = (props) => { 
  // if we were not interested in accessing the props object, we could just type navigation so we only have access to the navigation element inside the props object and then 
  // reduce the amount of times we have to go deeper into the props.navigation,navigate we could just do navigation.navigate 
  return (
  <View>
    <Text style={styles.text}>Hey there!</Text>
    {/* The button shows some pre-styled text, cannot be very customized */}
    <Button 
      onPress={() => props.navigation.navigate('Components')}
      title="Go to Components Demo"
    />
    <Button
      onPress={() => props.navigation.navigate('List')}
      title="Go to List Demo"
    />

    <Button
        onPress={() => props.navigation.navigate('Image')}
        title = "Go to Image"
    />

    <Button
        onPress={() => props.navigation.navigate('Counter')}
        title = "Counter"
    />

    <Button
        onPress={() => props.navigation.navigate('Color')}
        title = "Color Demo"
    />

    <Button
        onPress={() => props.navigation.navigate('Square')}
        title = "SquareScreen Demo"
    />


    {/*will let us put in as many elements as we want and is very customizable*/}
    {/* <TouchableOpacity onPress={()=> props.navigation.navigate('List')}>
      <Text>Go to List Demo</Text>
    </TouchableOpacity> */}

    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
