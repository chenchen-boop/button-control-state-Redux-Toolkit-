import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../src/redux/counter";
import {View,Text,Button,StyleSheet}from 'react-native';
import { Center } from "native-base";

const Home=()=>{
    const { count } = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
      <View StyleSheet={styles.container}>
        
        
        <Button onPress={() => dispatch(increment())} title='increment'/>
        <Button onPress={() => dispatch(decrement())} title='decrement'/>
        <Button onPress={() => dispatch(incrementByAmount(33))} title='Increment by 33'/>
        <Text> The count is: {count}</Text>
        
        </View>
      
    );
}
export default Home;
const styles = StyleSheet.create({
    container: {
      marginTop: 50,
     
    },
    
  });