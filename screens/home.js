import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../src/redux/counter";
import { Adecrement, Aincrement, AincrementByAmount } from "../src/redux/assist";

import {View,Text,Button,StyleSheet}from 'react-native';
import { Center, Row } from "native-base";
import globalStyle from "../globalStyle";
import  {useNavigation}  from "@react-navigation/native";
 

const Home=()=>{
  const navigation = useNavigation();
    const { count } = useSelector((state) => state.counter);
    const { assist } = useSelector((state) => state.assist);
    const dispatch = useDispatch();
    return (
      <View style={styles.container}>
        <View style={{flexDirection:'row'  }}>
        
            <Button onPress={() => dispatch(increment())} title='Point +' />
            <Button onPress={() => dispatch(decrement())} title='Point -'/>
            <Button onPress={() => dispatch(incrementByAmount(33))} title='Point + 33' />
            <Text> The count is: {count}</Text>
        </View>

        <View style={{flexDirection:'row'  }}>
        
          <Button onPress={() => dispatch(Aincrement())} title='Assist +' />
          <Button onPress={() => dispatch(Adecrement())} title='Assist -'/>
          <Button onPress={() => dispatch(AincrementByAmount(33))} title='Assist + 33' />
          <Text> The count is: {assist}</Text>
        </View>
        <View>
          <Button onPress={()=>navigation.navigate('Test')} title='go to Test'/>
        </View>

        
      </View>
    );
}
export default Home;
const styles = StyleSheet.create({
    container: {
       flex:1,
      // height:1000,
      paddingTop:25,
      justifyContent:'center',
      alignItems:'center'
     
    },
    
  });